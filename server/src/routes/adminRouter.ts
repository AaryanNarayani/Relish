import { Request, Response } from "express";
import { createRestoSchema } from "../types/admin/createResto";
import { getPrisma } from "../utils/getPrisma";
import authMiddleware from "../middlewares/authMiddleware";
import { createMenuItem } from "../types/admin/createMenuItem";
import { updateMenuSchema } from "../types/admin/updateMenuSchema";
import { updateOrders } from "../types/admin/updateOrders";

const express = require('express');
const router = express.Router();

interface AuthRequest extends Request {
    userId?: number;
}

router.get('/',(req:Request,res:Response)=>{
    console.log('Hit Hotel Admin Route');
    res.send('Admin Hotel Route');
})

router.post('/create-resto', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const payload = req.body;
    const { success, error } = createRestoSchema.safeParse(payload);

    if (!success) {
    return res.status(400).json({ message: 'Invalid Inputs', errors: error.issues.map(e => e.message) });
    }

    const prisma = getPrisma();

    const existingResto = await prisma.restaurant.findFirst({
    where: { 
        name: payload.name, 
        address: payload.address 
    },
    });

    if (existingResto) {
        console.log(`Restaurant with the same name: ${payload.name} or address ${payload.address} already exists`);
        return res.status(409).json({ message: 'Restaurant with the same name or address already exists' });
    }

    const resto = await prisma.restaurant.create({
    data: {
        name: payload.name,
        address: payload.address,
        cuisine: payload.cuisine,
        description: payload.description || '',
        ownerId: Number(req.userId),
    },
    });

    return res.status(201).json({ message: 'Restaurant Created Successfully', resto });
}catch (e) {
    console.error('Error creating restaurant:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.put('/update-resto/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    const payload = req.body;
    const { success, error } = createRestoSchema.safeParse(payload);

    if (!success) {
        return res.status(400).json({ message: 'Invalid Inputs', errors: error.issues.map(e => e.message) });
    }

    const prisma = getPrisma();
    const existingResto = await prisma.restaurant.findFirst({
    where: {
        id,
        ownerId: Number(req.userId),
    },
    });

    if (!existingResto) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    const resto = await prisma.restaurant.update({
    where: { id },
    data: {
        name: payload.name,
        address: payload.address,
        cuisine: payload.cuisine,
        description: payload.description || '',
    },
    });

    return res.status(200).json({ message: 'Restaurant Updated Successfully', resto });
}catch(e) {
    console.error('Error updating restaurant:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.delete('/delete-resto/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
    return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    const prisma = getPrisma();
    const existingResto = await prisma.restaurant.findFirst({
    where: {
        id,
        ownerId: Number(req.userId),
    },
    });

    if (!existingResto) {
    return res.status(404).json({ message: 'Restaurant not found' });
    }

    await prisma.restaurant.delete({
    where: { id },
    });

    return res.status(200).json({ message: 'Restaurant Deleted Successfully' });
}catch(e) {
    console.error('Error deleting restaurant:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.post('/create-menu-item/:restoId', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const restoId = Number(req.params.restoId);
    if (isNaN(restoId) || restoId <= 0) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    const payload = req.body;
    const { success, error } = createMenuItem.safeParse(payload);
    if (!success) {
        console.log('Invalid Inputs', error);
        return res.status(400).json({ message: 'Invalid Inputs', errors: error.issues.map(e => e.message) });
    }
    
    const prisma = getPrisma();
    const existingResto = await prisma.restaurant.findFirst({
    where: {
        id: restoId,
        ownerId: Number(req.userId),
    },
    });

    if (!existingResto) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menuItem = await prisma.menuItem.create({
    data: {
        name: payload.name,
        price: payload.price,
        description: payload.description || '',
        restaurantId: restoId,
    },
    });

    return res.status(201).json({ message: 'Menu Item Created Successfully', menuItem });
}catch(e) {
    console.error('Error creating menu item:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.put('/update-menu-item/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: 'Invalid menu item ID' });
    }

    const payload = req.body;
    const { success, error } = updateMenuSchema.safeParse(payload);
    if (!success) {
        console.log('Invalid Inputs', error);
        return res.status(400).json({ message: 'Invalid Inputs', errors: error.issues.map(e => e.message) });
    }
    const prisma = getPrisma();
    const existingMenuItem = await prisma.menuItem.findFirst({
    where: {
        id,
        restaurant: {
        ownerId: Number(req.userId),
        },
    },
    });

    if (!existingMenuItem) {
        return res.status(404).json({ message: 'Menu Item not found' });
    }

    const menuItem = await prisma.menuItem.update({
    where: { id },
    data: {
        name: payload.name,
        price: payload.price,
        ...(payload.description !== undefined && { description: payload.description }),
    },
    });

    return res.status(200).json({ message: 'Menu Item Updated Successfully', menuItem });
}catch(e) {
    console.error('Error updating menu item:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.delete('/delete-menu-item/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: 'Invalid menu item ID' });
    }

    const prisma = getPrisma();
    const existingMenuItem = await prisma.menuItem.findFirst({
    where: {
        id,
        restaurant: {
        ownerId: Number(req.userId),
        },
    },
    });

    if (!existingMenuItem) {
        return res.status(404).json({ message: 'Menu Item not found' });
    }

    await prisma.menuItem.delete({
    where: { id },
    });

    return res.status(200).json({ message: 'Menu Item Deleted Successfully' });
}catch(e) {
    console.error('Error deleting menu item:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.get('/orders/:restoId', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const restoId = Number(req.params.restoId);
    if (isNaN(restoId) || restoId <= 0) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    const prisma = getPrisma();
    const existingResto = await prisma.restaurant.findFirst({
    where: {
        id: restoId,
        ownerId: Number(req.userId),
    },
    });

    if (!existingResto) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    const orders = await prisma.order.findMany({
    where: {
        restaurantId: restoId,
    },
    include: {
        user: true,
        items: true,
    },
    });

    return res.status(200).json({ orders });
}catch(e) {
    console.error('Error fetching orders:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.put('/update-order/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: 'Invalid order ID' });
    }

    const payload = req.body;
    const { success, error } = updateOrders.safeParse(payload);
    if(!success) {
        console.log('Invalid Inputs', error);
        return res.status(400).json({ message: 'Invalid Inputs', errors: error.issues.map(e => e.message) });
    }
    
    const prisma = getPrisma();

    const existingOrder = await prisma.order.findFirst({
    where: {
        id,
        restaurant: {
        ownerId: Number(req.userId),
        },
    },
    });

    if (!existingOrder) {
        return res.status(404).json({ message: 'Order not found' });
    }

    const order = await prisma.order.update({
    where: { id },
    data: {
        status: payload.status,
    },
    });

    return res.status(200).json({ message: 'Order Updated Successfully', order });
}catch(e) {
    console.error('Error updating order:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

export { router as adminRouter };
