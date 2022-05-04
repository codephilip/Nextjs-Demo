//import styles from "../../styles/Team.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import TeamMemberCard from "../../components/TeamMemberCard";

const Team = ({ team }) => {
  return (
    <section class="text-gray-600 body-font bg-beige">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src={team.img}/>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font text-8xl mb-4 font-BebasNeue text-blue">{team.name}
          <br/>
          <p class="text-3xl mb-4 font-BebasNeue text-blue">{team.role}</p>
          </h1>
          <p class="mb-8 text-3xl leading-relaxed font-Roboto tracking-tight">{team.bio}</p>
          <span class="inline-flex">
              <a class="text-gray-500 flex items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                <h1 class="px-2 text-xs">examplefacebook.com</h1>
              </a>
              <a class="ml-2 text-gray-500 flex items-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                <h1 class="px-2 text-xs">@exampleTwitter</h1>
              </a>
              <a class="ml-2 text-gray-500 flex items-center">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
              </svg>
              
              <h1 class="px-2 text-xs">patterson@example.com</h1>
              </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/team/${params.id}`);
  // const res = await axios.get(
  //   `https://cranky-banach-68238c.netlify.app/team/${params.id}`
  // );
  return {
    props: {
      team: res.data,
    },
  };
};

export default Team;
