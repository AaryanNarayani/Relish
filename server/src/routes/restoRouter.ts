import { Request, Response } from "express";
import { getPrisma } from "../utils/getPrisma";

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    if (page < 1 || limit < 1) {
    return res.status(400).json({ message: 'Page and limit must be positive integers' });
    }

    const skip = (page - 1) * limit;
    const prisma = getPrisma();

    const totalRestaurants = await prisma.restaurant.count();

    const restaurants = await prisma.restaurant.findMany({
    skip: skip,
    take: limit,
    });

    if (restaurants.length === 0) {
    return res.status(404).json({ message: 'No restaurants found' });
    }

    res.status(200).json({
    restaurants,
    totalRestaurants,
    currentPage: page,
    totalPages: Math.ceil(totalRestaurants / limit),
    });
} catch (e) {
    console.error('Error fetching restaurants:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.get('/:id', async (req: Request, res: Response) => {
try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
    return res.status(400).json({ message: 'Invalid restaurant ID. Must be a positive number.' });
    }
    const prisma = getPrisma();
    const restaurant = await prisma.restaurant.findUnique({
    where: { id },
    });
    
    if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
    }
    return res.status(200).json({ restaurant });
} catch (e) {
    console.error('Error fetching restaurant by ID:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});  

router.get('/:restoId/menu', async (req: Request, res: Response) => {
try {
    const restoId = Number(req.params.restoId);
    if (isNaN(restoId) || restoId <= 0) {
    return res.status(400).json({ message: 'Invalid restaurant ID. Must be a positive number.' });
    }

    const prisma = getPrisma();

    const menuCount = await prisma.menuItem.count({
        where: { restaurantId: restoId },
    });
    if (menuCount === 0) {
        return res.status(404).json({ message: 'No menu items available for this restaurant.' });
    }

    const menu = await prisma.menuItem.findMany({
        where: { restaurantId: restoId },
    });

    return res.status(200).json({ menu });
} catch (e) {
    console.error('Error fetching menu by restaurant ID:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

router.get('/:restoId/reviews', async (req: Request, res: Response) => {
try {
    const restoId = Number(req.params.restoId);
    if (isNaN(restoId) || restoId <= 0) {
    return res.status(400).json({ message: 'Invalid restaurant ID. Must be a positive number.' });
    }

    const prisma = getPrisma();

    const reviewsCount = await prisma.review.count({
        where: { restaurantId: restoId },
    });
    if (reviewsCount === 0) {
        return res.status(404).json({ message: 'No reviews available for this restaurant.' });
    }

    const reviews = await prisma.review.findMany({
        where: { restaurantId: restoId },
    });

    return res.status(200).json({ reviews });
}
catch (e) {
    console.error('Error fetching reviews by restaurant ID:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
}
});

export { router as restoRouter };
