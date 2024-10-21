import { PAGES_PAGE, PRICE_PLAN_PAGE, PRODUCT_PAGE } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex space-x-6">
        <Link
          href={PRODUCT_PAGE}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Products
        </Link>
        <Link
          href={PRICE_PLAN_PAGE}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          Price Plans
        </Link>
        <Link
          href={PAGES_PAGE}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Pages
        </Link>
      </div>
    </div>
  );
}
