import axios from "axios";
//import ProductTable from "../../components/ProductForm";

//import ProductList from "../../components/ProductList";
export default function Home({ products }) {
  return (
    <div>
      <h1 class="text-center pt-10">Radiology</h1>

      <div>
       
      {products.map((product) => {
                      return (
                        <p
                          key={product._id}
                        >
                          {product.title}, {product.prices}

                        </p>
                      );
                    })}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  // const res = await axios.get(
  //   "https://cranky-banach-68238c.netlify.app//api/products"
  // );
  console.log(res);
  return {
    props: {
      products: res.data,
    },
  };
};
