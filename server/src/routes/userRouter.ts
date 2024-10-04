import { Request, Response } from "express";
import { updateProfile } from "../types/user/updateProfile";
import { getPrisma } from "../utils/getPrisma";
import authMiddleware from "../middlewares/authMiddleware";
import { orderSchema } from "../types/user/orderSchema";
import { Decimal } from "@prisma/client/runtime/library";
import { reviewSchema } from "../types/user/reviewSchema";

const express = require('express');
const router = express.Router();

interface AuthRequest extends Request {
    userId?: number;
}

router.get('/',(req:Request,res:Response)=>{
    console.log('Hit User Route');
    res.send('User Route');
})

router.put('/profile',authMiddleware, async(req:AuthRequest,res:Response)=>{
try{
    const payload = req.body;
    const {success, error} = updateProfile.safeParse(payload);
    if(!success){
        console.log('Invalid Inputs',error);
        return res.status(400).json({message:'Invalid Inputs'});
    }
    const prisma = getPrisma();
    
    const existingEmail = await prisma.user.findUnique({
        where: { email: payload.email },
    });
    
    if (existingEmail && existingEmail.id !== req.userId) {
        return res.status(409).json({ message: "Email already in use" });
    }

    const user = await prisma.user.update({
        where:{id:req.userId},
        data:{
            name:payload.name,
            email:payload.email,
            address:payload.address
        }
    });
    res.status(200).json({message:'Profile Updated Successfully',user});
}catch(e){
    console.log(e);
    res.status(500).json({message:'Internal Server Error'});
}
});

router.get("/orders",authMiddleware,async (req: AuthRequest, res: Response) => {
try {
    const prisma = getPrisma();
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const orders = await prisma.order.findMany({
    where: { userId: req.userId },
    skip: skip,
    take: take,
    });

    const totalOrders = await prisma.order.count({
    where: { userId: req.userId },
    });

    res.status(200).json({
    orders,
    pagination: {
        totalOrders,
        currentPage: Number(page),
        totalPages: Math.ceil(totalOrders / Number(limit)),
    },
    });
} catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
}
});

router.get("/order/:id",authMiddleware,async (req: AuthRequest, res: Response) => {
try {
    const prisma = getPrisma();
    const orderId = Number(req.params.id);
    if (isNaN(orderId)) {
        return res.status(400).json({ message: "Invalid Order ID" });
    }
    const order = await prisma.order.findFirst({
    where: { id: orderId, userId: req.userId },
    });

    if (!order) {
    return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
}
catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
}
});

router.post("/order", authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const payload = req.body as { items: any[]; restaurantId: number };
    const { success, error } = orderSchema.safeParse(payload);

    if (!success) {
    console.log("Invalid Inputs", error);
    return res.status(400).json({ message: "Invalid Inputs" });
    }

    if (payload.items.length === 0) {
    return res.status(400).json({ message: "Order must contain at least one item" });
    }

    // Validate price and quantity
    for (const item of payload.items) {
    if (item.quantity <= 0 || item.price <= 0) {
        return res.status(400).json({ message: "Invalid item quantity or price" });
    }
    }

    const prisma = getPrisma();
    const totalPrice = payload.items.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
    );

    const order = await prisma.order.create({
    data: {
        userId: Number(req.userId),
        restaurantId: payload.restaurantId,
        totalPrice: new Decimal(totalPrice),
        items: {
        create: payload.items.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: new Decimal(item.price),
        })),
        },
    },
    include: {
        items: true,
    },
    });

    res.status(200).json({ message: "Order Placed Successfully", order });
} catch (e) {
    console.error("Error creating order:", e);
    res.status(500).json({ message: "Internal Server Error" });
}
});

router.post('/review', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const payload = req.body;
    const { success, error } = reviewSchema.safeParse(payload);

    if (!success) {
        console.log('Invalid Inputs', error);
        return res.status(400).json({ message: 'Invalid Inputs' });
    }

    const restaurantId = Number(payload.restaurantId);
    const { rating, comment } = payload;

    const prisma = getPrisma();
    
    // Check if review already exists for this user and restaurant
    const existingReview = await prisma.review.findFirst({
        where: {
            userId: req.userId,
            restaurantId: restaurantId
        }
    });

    if (existingReview) {
        return res.status(409).json({ message: 'Review already exists' });
    }

    // Create new review
    const newReview = await prisma.review.create({
        data: {
            userId: req.userId!,
            restaurantId: restaurantId,
            rating: rating,
            comment: comment || ''  
        }
    });
    res.status(200).json({ message: 'Review Created Successfully', newReview });
} catch (e) {
    console.error("Error during review creation:", e);
    res.status(500).json({ message: 'Internal Server Error' });
}
});

router.get('/reviews', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const prisma = getPrisma();
    const reviews = await prisma.review.findMany({
        where: { userId: req.userId },
        include: {
            restaurant: true
        }
    });
    res.status(200).json({ reviews });
}
catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
}
});

router.delete('/review/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const reviewId = Number(req.params.id);
    if (isNaN(reviewId)) {
        return res.status(400).json({ message: 'Invalid Review ID' });
    }

    const prisma = getPrisma();
    const review = await prisma.review.findFirst({
        where: { id: reviewId, userId: req.userId }
    });

    if (!review) {
        return res.status(404).json({ message: 'Review not found' });
    }

    await prisma.review.delete({
        where: { id: reviewId }
    });

    res.status(200).json({ message: 'Review deleted successfully' });
}
catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
}
});

export { router as userRouter };
