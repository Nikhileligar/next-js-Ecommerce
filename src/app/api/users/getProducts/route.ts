import { DbConfig } from "@/app/config/db";
import User from "@/app/model/model";
import { NextRequest, NextResponse } from "next/server";

DbConfig()

export const GET = async (req: NextRequest) => {
    try {
        const data = await User.find();
        console.log(data,'get products api');
        return NextResponse.json({
            message:'products retrieved successfully',
            data,
            success: true,
            status: 200
        },{});
    } catch(err) {
        return NextResponse.json({
            message: 'error',
            err
        })
    }
}