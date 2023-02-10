import React, { useState } from "react";
import Container from "../../../components/common/Container";
import RichTextRenderer from "../../../components/common/RichTextRenderer";
// Styles
import styles from "./index.module.scss";
export const Freshmart = ({ data }: any) => {
  const { contentDescriptionCollection } = data;
  return (
    <section className="mt-[50px]">
      <Container>
        <div className={`mx-auto `}>
          <div className={" flex  gap-8 " + styles.mq}>
            <div
              className={
                "max-w-[290px]  flex items-center justify-center relative"
              }
            >
              <img src={"assets/iPhone_Black.svg"} alt="image of a" />
              <img
                className="absolute z-[-1]"
                src={"assets/freshmartcircle.png"}
              ></img>
            </div>
            <div className=" flex-1 min-w-[320px] md:max-w-[560px]  ">
              <div className={`mx-auto  ${styles.bg}`}>
                {contentDescriptionCollection.items.map(({ content }: any) => (
                  <div
                    className={`min-w-[320px] md:w-[560px] ${styles.servicesContent}`}
                  >
                    <RichTextRenderer json={content.json} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
