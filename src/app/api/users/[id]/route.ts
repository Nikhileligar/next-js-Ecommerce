import User from "@/app/model/model";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, {params}: any) => {
    try {
        const {id} = params;
        console.log(id,'backend api');
        const reqData = await req.json();
        console.log(reqData,'xyz')
        const {name, description, qty, price} = reqData;
        const data = await User.findOne({_id: id});

        if (!data) {
            return NextResponse.json({
                message: 'id not found',
                success: false,
                id,
                status: 404
            })
        }
        await User.updateOne({_id: id},{$set: {name, description, qty, price}});
        return NextResponse.json({
            reqData,
            success: true,
            status: 200,
            message: `product has been updated`
        })
    } catch(err) {
        console.log(err);
    }
}

export const GET = async (req: NextRequest, {params}: any) => {
    try {
        const { id } = params;
        const data = await User.findOne({_id: id});
        if (!data) {
            return NextResponse.json({
                message: 'not found',
                success: false,
                // id,
                status: 404
            })
        }
        return NextResponse.json({
            data,
            success: true,
            status: 200
        })
    } catch(err) {
        console.log(err);
    }
}