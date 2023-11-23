import User from "@/app/model/model";
import { NextRequest, NextResponse } from "next/server";




export async function DELETE (req: NextRequest) {
        try {
             const _id = req.nextUrl.searchParams.get('id');
             const res = await User.findByIdAndDelete({_id})
             if (!res) {
                return NextResponse.json({
                        message: `id not found in db ${_id}`
                })             
            }
             return NextResponse.json({
                message:`product with ${_id} this id deleted succeffully`
             })
        } catch(err) {
                console.log(err,'deletion failed to perform from backend');
        }
}