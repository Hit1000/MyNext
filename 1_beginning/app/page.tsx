import Image from "next/image";
import Hello from "../components/hello";
import Link from "next/link";

export default function Home() {
    const list = [
        {name: "Products 1", href: "/products/1"},
        {name: "Products 2", href: "/products/2"},
        {name: "Products 3", href: "/products/3"},
        {name: "Products 4", href: "/products/4"},
        {name: "Products 4 reviews 1", href: "/products/4/reviews/1"},
        {name: "Products 4 reviews 2", href: "/products/4/reviews/2"},
        {name: "Products 4 reviews 7", href: "/products/4/reviews/7"},
        {name: "Docs Features", href: "/docs/features/1"},
        {name: "Docs Features 2", href: "/docs/features/2"},
        {name: "Docs Features 3", href: "/docs/features/3"},
    ]
    console.log("hello world hay this is server component");
    return (
        <>
            <div>
                hello world
            </div>
             <Hello/>
            
            {list.map((item) => (
                <div className="text-blue-500">
                <Link href={item.href}>{item.name}</Link>   
                </div>
            ))}

        </>
    );
}
