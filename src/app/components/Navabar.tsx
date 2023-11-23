import Link from "next/link";
export default function Navbar() {
    return(
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                <Link href={"/"} className="text-white font-bold">products</Link>
                <Link href={'/addProducts'} className="p-2 bg-white font-bold">add products</Link>            
            
        </nav>
    )
}