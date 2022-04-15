import axios from "axios";

import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.container}>
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
