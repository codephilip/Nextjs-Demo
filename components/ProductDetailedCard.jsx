//import Image from "next/image";
//import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductDetailedCard = ({ product }) => {
  return (
    <div class="mt-10 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="flex items-center px-6 py-3 bg-gray-900">
        <h1 class="mx-3 text-lg font-semibold text-white">{product.title}</h1>
      </div>

      <div class="px-6 py-4">
        <p class="py-2 text-gray-700 dark:text-gray-400">
          {product.secondary_desc}
        </p>

        <p>{product.CPT}</p>
      </div>
    </div>
  );
};

export default ProductDetailedCard;
