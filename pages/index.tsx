import Head from "next/head";
import HeroBanner from "../container/HeroBanner";
import Services from "../container/Services";
import FindUs from "../container/FindUs";
import WeFresh from "../container/WeFresh";
import { Freshmart } from "../container/Freshmart";
import GetApp from "../container/GetApp";
import { Partners } from "../container/Partners";
import Question from "../container/Question";

export default function HomePage() {
  return (
    <>
       <HeroBanner />
      <Services />
      <Freshmart /> 
     <FindUs /> 
       <Partners/>
      <Question/>
      <GetApp/>
      <WeFresh />
    
    
    
    </>
  )
  
  
  










  
}
