"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  // console.log("pathname", pathname);
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div className="h-screen w-screen flex text-white p-10">
      <div className="bg-purple-700 flex flex-1 justify-center items-center text-7xl font-serif p-[100px] rounded-xl shadow-lg">
        404 - Review {reviewId} for Product {productId} Not Found
      </div>
    </div>
  );
}