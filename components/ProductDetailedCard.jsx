//import Image from "next/image";
//import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductDetailedCard = ({ product }) => {
  return (
    <div class="mt-10 bg-white w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <img
        class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100"
        src={product.img}
      />

      <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
          <div class="bg-gray-100 w-full h-14 rounded-2xl">
            <h1 class="text-center">{product.title}</h1>
          </div>
          <p class="text-center">{product.desc}</p>
          <p class="text-center">{product.secondary_desc}</p>
          <p class="text-center"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailedCard;
