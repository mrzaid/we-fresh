import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Children } from "react";


function Layout({ children,pageProps }: any) {
   console.log('layouttsxdata',pageProps)
  return (
    <div className="layout">
         <Head>
        <title>WeFresh</title>
        <link  href="../public/assets/logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
   
      <Footer/>
    </div>
  );
}

export default Layout;
