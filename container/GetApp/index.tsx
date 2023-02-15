import React from "react";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

//styles
import styles from "./index.module.scss";

interface iconsType {
  socialLink: {
    url: string;
  };
  socialsImage: {
    url: string;
    title: string;
  };
}

const GetApp = ({ data }: any) => {
  const { appDescription, appSocialsCollection } = data.items[0];
  return (
    <section className="bg-lbluee">
      <Container>
        <div className="min-w-[220px] md:max-w-[600px]  mx-auto flex items-center justify-center">
          <div className={`mt-[50px] md:mt-[108px] ${styles.getApp}`}>
            <RichTextRenderer json={appDescription.json} />

            <div
              className={`mt-10 md:mb-[63pxpx] mb-[83px] flex items-center md:justify-evenly flex-col md:flex-row ${styles.image}`}
            >
              {appSocialsCollection.items.map(
                ({ socialLink, socialsImage }: iconsType) => (
                  <a href={socialLink.url} target="_blank">
                    <div className="">
                      <img src={socialsImage.url} alt={socialsImage.title} />
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetApp;
