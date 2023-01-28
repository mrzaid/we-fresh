import React from "react";
import Container from "../../components/common/Container";
import styles from "./index.module.css";
export const Freshmart = () => {
  var data = [
    {
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: false,
    },
    {
      title: "Adipiscing elit sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: true,
    },
    {
      title: "Labore et dolore magna aliqua",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      selected: false,
    },
  ];
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
                {data.map(({ title, desc, selected }) => {
                  return (
                    <div className=" min-w-[320px] md:w-[560px]">
                      <div className={`${selected ? "bg-lbluee" : ""}`}>
                        <h1 className="text-bluee font-normal text-2xl leading-8 px-12 pt-8	">
                          {title}
                        </h1>
                        <p className=" font-normal text-greyy text-base	leading-8	px-12 pt-2.5	">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
