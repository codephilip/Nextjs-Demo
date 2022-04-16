import axios from "axios";

import Image from "next/image";
import doctorimg1 from "../public/img/doctorimg1.png";
import doctorimg2 from "../public/img/doctorimg2.png";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.HomePageContent}>
      <div>
      <section class="bg-softBeige ">
        <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-1/4 text-6xl text-deepBlue">
                  <p style={{
            fontFamily: "Bebas Neue",
            color: "#234473",}}
            >WE WANT YOU TO SEE WHAT WE SEE</p>
                </div>

                <div class="mt-8 w-3/4">
                    <div class="flex items-center lg:justify-end">
                        <div>
                        <Image src={doctorimg1} alt="Hero"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>

      <div className={styles.break}></div>
      <div className={styles.ourStory}>
        <h1 class="text-7xl"
          style={{
            fontFamily: "Bebas Neue",
            padding: "10px",
            color: "#234473",
            textAlign: "center",
          }}
        >
          OUR STORY
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra sollicitudin orem ac ultricies. Vestibulum eget mollis dolor.
          Donec finibus mi et quam condimentum efficitur. Nam in efficitur quam.
          Sed bibendum nunc odio, vitae iaculis nisl interdum quis. Morbi
          sollicitudin molestie nulla non lobortis. Phasellus suscipit consequat
          condimentum. Aliquam nibh tortor, molestie eu eleifend in, feugiat
          scelerisque erat. Nam vulputate lectus in tortor sollicitudin rhoncus.
          Etiam et sem eu ipsum ultrices ornare quis sit amet risus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div>
      <section class="bg-softBeige ">
        <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">

                  <div class="mt-8 w-3/5">
                    <div class="flex items-start">
                        <div>
                        <Image src={doctorimg2} alt="Hero"/>
                        </div>
                    </div>
                </div>
               
                <div class="w-2/5 text-6xl">
                  <p style={{
            fontFamily: "Bebas Neue",
            color: "#234473",}}
            >"LOREM IPSUM DOLOR SIT AMET"</p>
                </div>

      
            </div>
        </div>
    </section>
      </div>
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
