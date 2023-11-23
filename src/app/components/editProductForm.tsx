"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, name, description, qty, price }: any) {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newQty, setNewQty] = useState(qty);
  const [newPrice, setNewPrice] = useState(price);

  const router = useRouter();


  const updateData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newName, newDescription, newQty, newPrice }),
        });
  
        if (!res.ok) {
          throw new Error("Failed to update topic");
        }
      } catch (error) {
        console.log(error);
      }
  }
  const handleSubmit = async (e: any) => {
    console.log('handle');
    if (e) {
        e.preventDefault();
    }
    updateData();
    router.refresh();
    router.push(`/`);
  };

  useEffect(() => {
    updateData();
  })

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="product name"
        onSubmit={handleSubmit}
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="product Description"
      />

      <input
        onChange={(e) => setNewQty(e.target.value)}
        value={newQty}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="product qty"
      />

      <input
        onChange={(e) => setNewPrice(e.target.value)}
        value={newPrice}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="product price"
      />

      <button onClick = {handleSubmit} className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        update product        
      </button>
    </form>
  );
}