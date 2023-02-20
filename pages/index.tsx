import { GetStaticProps } from "next";
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
import { getHomePageQuery, WebsiteDetailsQuery } from "../query";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const homepageQuery = getHomePageQuery(locale);
  const websiteDetailsQuery = WebsiteDetailsQuery(locale);

  const fetchedContent = await fetchContent(homepageQuery);
  const websiteDetails = await fetchContent(websiteDetailsQuery);

  return {
    props: {
      websiteDetails: websiteDetails?.data || null,
      data: fetchedContent?.data || null,
    },
  };
};

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
