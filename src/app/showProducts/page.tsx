"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";


const getProducts = async () => {
    try {
        const response = await axios.get('/api/users/getProducts');
        console.log(response.data.data, 'get users api');
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
};

export default function ShowProducts() {
    const [products, setProducts] = useState([]);
    console.log(products,'products list api');

    useEffect(() => {
        const fetchProducts = async () => {
            const productsList = await getProducts();
            console.log(productsList, 'products list api');
            setProducts(productsList);
            console.log(products,'updated products to')
        };
        fetchProducts();
    }, []);

    return (
        <div className="p-4 border border-slate-300 flex justify-between items-start my-3 gap-3">
            {products.map((product: any) => (
                <div key={product._id} className="mt-5 p-8 border border-slate-900">
                    <h1 className="text-black font-bold text-2xl">{product.name}</h1>
                    <p className="text-black">{product.description} </p>
                    <p className="text-black">Price: {product.price} </p>
                    <p className="text-black">Qty: {product.qty} </p>
                    <div className="flex gap-5">
                        <RemoveBtn id= {product._id}/>
                        <Link href={`/editProducts/${product._id}`}>
                        <HiPencilAlt size={24}/>
                        </Link>
            </div>
                </div>
            ))}
        </div>
    );
}






// if (Array.isArray(response.data.data)) {
//     setProducts(response.data.data);
//     console.log(setProducts);
// }