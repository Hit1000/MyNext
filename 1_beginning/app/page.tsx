import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
    console.log("hello world hay this is server component");
    return (
        <>
            <div>
                hello world
            </div>
            <Hello/>
        </>
    );
}
