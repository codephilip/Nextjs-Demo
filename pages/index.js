import axios from "axios";

import Image from "next/image";
import doctorimg1 from "../public/img/doctorimg1.png";
import doctorimg2 from "../public/img/doctorimg2.png";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <section class="text-gray-600 body-font bg-beige">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center flow-root">
      <h1 class=" ml-32 title-font text-8xl mb-4 font-BebasNeue text-blue float-left">
        WE 
        <br/>WANT 
        <br/>YOU
        <br/>TO
        <br/>SEE
        <br/>WHAT
        <br/>WE
        <br/>SEE
      </h1>
      
    </div>
    <div class="max-w-full h-auto">
        <Image src={doctorimg1} alt="Hero" class="object-coverobject-center rounded" />
    </div>
  </div>
  
  <div class="container px-5 py-24 mx-auto">
    <div class="max-w-full mx-auto text-center">
    <p class="leading-relaxed text-8xl font-BebasNeue text-blue">OUR STORY</p>
    <br/>
      <p class="md:ml-52 md:mr-56 text-3xl font-Inter leading-relaxed font-Roboto text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
  </div>

  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image src={doctorimg2} alt="Hero" class="object-coverobject-center rounded" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font text-8xl mb-4 font-BebasNeue text-blue">"Lorem ipsum dolor sit amet"</h1>     
    </div>
  </div>
</section>
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
