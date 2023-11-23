import { NextRequest, NextResponse } from "next/server";
import User from '@/app/model/model.js';
import {DbConfig} from '@/app/config/db.js';
import { v4 as uuidv4 } from 'uuid';

DbConfig()

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const uniqueId = uuidv4();
        console.log(data, 'recieved in backend')
        const {name, description, price, qty} = data;
        const newUser = new User({
            productId: uniqueId,
            name,
            description,
            price,
            qty,
        })
        const saved = await newUser.save();
        console.log(saved);
        return NextResponse.json({
            message: 'product added successfully',
            uniqueId,
            data,
            success: true,
            status: 201
        })
    } catch (err) {
        console.log(err,'error')
        return NextResponse.json({
            err,
            message: 'failed to create/add new product'
        })
    }
}