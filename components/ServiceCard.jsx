//import Image from "next/image";
//import styles from "../styles/ServiceCard.module.css";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div classNameName={styles.container}>
        <div width="500" height="500"></div>
      </div>
      <h1 classNameName={styles.title}>{service.title}</h1>
      <span classNameName={styles.product}>${service.prices[0]}</span>
      <p classNameName={styles.desc}>{service.desc}</p>
    </div>
  );
};

export default ServiceCard;
