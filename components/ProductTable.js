//import styles from "../styles/ProductList.module.css";
import axios from "axios";
const ProductList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li key={product._id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  //const res = await axios.get("http://localhost:3000/api/products");
  const res = await axios.get(
    "https://cranky-banach-68238c.netlify.app//api/products"
  );
  console.log(res);
  return {
    props: {
      products: res.data,
    },
  };
};
export default ProductList;
