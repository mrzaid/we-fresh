import Head from "next/head";

//containers
import HeroBanner from "../container/HeroBanner";
import Services from "../container/Services";
import FindUs from "../container/FindUs";
import WeFresh from "../container/WeFresh";
import GetApp from "../container/GetApp";
import { Partners } from "../container/Partners";
import Question from "../container/Question";
import { fetchContent } from "../handlers";
//query
import { HomePageQuery, WebsiteDetailsQuery } from "../query";

export async function getStaticProps() {
  const fetchedContent = await fetchContent(HomePageQuery);
  const websiteDetails = await fetchContent(WebsiteDetailsQuery);

  return {
    props: {
      websiteDetails: websiteDetails?.data || null,
      data: fetchedContent?.data || null,
    },
  };
}

export default function HomePage({ data }: any) {
  const {
    heroCollection,
    servicesCollection,
    findUsCollection,
    partnersCollection,
    questionsCollection,
    getAppCollection,
    weFreshCollection,
  } = data;
  return (
    <>
      <HeroBanner data={heroCollection} />
      <Services data={servicesCollection} />
      <FindUs data={findUsCollection} />
      <Partners data={partnersCollection} />
      <Question data={questionsCollection} />
      <GetApp data={getAppCollection} />
      <WeFresh data={weFreshCollection} />
    </>
  );
}
