import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Note App</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
