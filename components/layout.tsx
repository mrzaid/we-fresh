import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Children } from "react";

function Layout({ children, data }: any) {
  const footerdata = data?.footerCollection;
  const headerdata = data?.headerCollection;
  return (
    <div className="layout">
      <Head>
        <title>WeFresh</title>
        <link href="/assets/headlogo.png" rel="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Header headerdata={headerdata} />
      </header>
      <main className="">{children}</main>

      <Footer footerdata={footerdata} />
    </div>
  );
}

export default Layout;
