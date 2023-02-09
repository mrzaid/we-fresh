import React, { useState } from "react";
import Container from "../../../components/common/Container";
import RichTextRenderer from "../../../components/common/RichTextRenderer";
import styles from "./index.module.css";
export const Freshmart = ({ data }: any) => {
  const { contentDescriptionCollection } = data;
  // var det = [
  //   {
  //     title: "Lorem ipsum dolor sit",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  //     selected: false,
  //   },
  //   {
  //     title: "Adipiscing elit sed do eiusmod",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  //     selected: true,
  //   },
  //   {
  //     title: "Labore et dolore magna aliqua",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  //     selected: false,
  //   },
  // ];
  // const [selected, setSelected] = useState(false);
  return (
    <section className="mt-[50px]">
      <Container>
        <div className=" mx-auto">
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
              <div className=" mx-auto ">
                {/* {det.map(({ title, desc, selected }) => {
                  return (                           
                        <h1 className="text-bluee font-normal text-2xl leading-8 px-12 pt-8	">
                          {title}
                        </h1>
                        <p className=" font-normal text-greyy text-base	leading-8	px-12 pt-2.5	">
                          {desc}
                        </p>
                  );
                })} */}
                {contentDescriptionCollection.items.map(({ content }: any) => (
                  <div
                    className={`min-w-[320px] md:w-[560px] ${styles.servicesContent}`}
                  >
                    {/* <div 
                      className={`${selected ? "bg-lbluee" : ""}`}
                      onClick={() => {
                        setSelected(!selected);
                      }}
                    > */}
                    <RichTextRenderer json={content.json} />
                    {/* </div> */}
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
