import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { BasicTable } from "./BasicTable";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
    </Head>
    <Header />
    {children}
    <Footer />
    <BasicTable/>
  </>
);

export default Layout;
