"use client"

import '../../app/app.css';
import DropDown from '@/app/components/DropDown'
import Link from 'next/link';
import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddProduct() {
    const router = useRouter();
    const [products,setProducts] = useState({
        name: '',
        description: '',
        qty: 0,
        price: 0,
    });

    useEffect(() => {
        addProducts();
    },[]);

    const addProducts = () => {
        try {
            console.log(products,'ui details entered');
            const response = axios.post('/api/users/addProducts',products);
            console.log(response,'api response called in ui')
            return response
        } catch(err) {
            console.log(err,'error in adding');
        }
    }
    return (
        <form className="flex flex-col gap-2 p-2">
            <input placeholder="Product Name" className="border border-slate-500 px-8 py-2" type="text" name="name" id="" value={products.name} onChange={(e) => setProducts({...products, name: e.target.value}) } />
            <input placeholder="product description" className="border border-slate-500 px-8 py-2 mt-5" type="text" name="description" id="" value={products.description} onChange={(e) => setProducts({...products, description: e.target.value})} />
            <input placeholder="product price" className="border border-slate-500 px-8 py-2 mt-5" type="number" name="price" id="" value={products.price} onChange={(e) => setProducts({...products, price: parseInt(e.target.value, 10) || 0 })}/>
            <input className="border border-slate-500 px-8 py-2 mt-5" placeholder="quantity" type="number" name="qty" id="" value={products.qty} onChange={(e) => setProducts({...products, qty: parseInt(e.target.value, 10) || 0 })} />
            <button onClick={addProducts} className='mt-4'>
                <Link href={'/showProducts'} className='px-6 py-3 w-fit bg-green-500 text-white font-bold'>Add Product</Link>
            </button>
        </form>
    )
}