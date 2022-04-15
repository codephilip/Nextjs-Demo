import axios from "axios";

import ProductList from "../../components/ProductList";
import ProductForm from "../../components/ProductForm";
export default function Home({ productList }) {
  return (
    <div>
      <h1 class="text-center pt-10">Radiology</h1>
      <ProductForm />
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
