"use client"

import axios from "axios";
import {useRouter} from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }: any) {
    const router = useRouter();
    const removeProduct = async (e: any) => {
            e.preventDefault();
            const confirmed = confirm("Are you sure?");

            if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
                method: "DELETE",
            });
            console.log(res,'response delete api')

            if (res.ok) {
                router.refresh();
            }
            router.push('/')
        }
  };
    return (
        <button className="text-red-400 text-2xl" onClick={removeProduct}>
            <HiOutlineTrash />
        </button>
    )
}