import Head from "next/head";
import { ReactNode } from "react";
import Header from "../components/common/Header";
import HeroBanner from "../container/HeroBanner";
import Services from "../container/Services";
import FindUs from "../container/FindUs";
import WeFresh from "../container/WeFresh";
import { Freshmart } from "../container/Freshmart";
import GetApp from "../container/GetApp";
import { Partners } from "../container/Partners";
import Question from "../container/Question";
import Footer from "../components/common/Footer";
import Link from "next/link";
type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
         <Head>
        <title>WeFresh</title>
        <Link  href="../public/assets/logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
      <HeroBanner />
      <Services />
      <Freshmart /> 
     <FindUs /> 
       <Partners/>
      <Question/>
      <GetApp/>
      <WeFresh />
      <Footer/>
    </div>
  );
}

export default Layout;
