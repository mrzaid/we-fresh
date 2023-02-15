import React from "react";
import Container from "../../../components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Styles
import styles from "./index.module.scss";
import RichTextRenderer from "../../../components/common/RichTextRenderer";

import "swiper/css";

const ServicesButton = ({ data, sendContent, heading }: any) => {
  const { items } = data;
  return (
    <section className={"mt-[0px] mb-[115px]"}>
      <Container>
        <div className="hidden md:block">
          <div className={`text-bluee py-24 ${styles.heading} `}>
            <RichTextRenderer json={heading.json} />
          </div>
          <div className=" max-w-[940px] mx-auto grid grid-cols-4 gap-3">
            {items.map(({ title, contentImage }: any, key: number) => (
              <div
                key={key}
                className={`flex flex-col text-center items-center ${styles.serviceCard}`}
                onClick={() => sendContent(title)}
              >
                <img
                  src={contentImage.url}
                  alt={contentImage.title}
                  className="w-1/2 "
                />

                <p className="text-center text-lg text-greyy mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden block">
          <div className="text-bluee  ">
            <h1 className=" w-full text-2xl  md:text-5xl font-bold text-center py-24 ">
              We've more services
            </h1>
          </div>
          <Swiper
            autoplay={true}
            spaceBetween={23}
            loop={false}
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 2,
                spaceBetween: 23,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            slidesPerView={1.2}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {items.map(({ title, contentImage }: any, key: number) => (
              <SwiperSlide className={styles.slideCon}>
                <div
                  className={
                    "flex flex-col items-center h-[230px]  " + styles.mqservices
                  }
                >
                  <div
                    key={key}
                    className="flex flex-col text-center items-center  "
                    onClick={() => sendContent(title)}
                  >
                    <div className="max-h-[120px] max-w-[120px]">
                      <img
                        src={contentImage.url}
                        alt={contentImage.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-center text-lg text-greyy mt-4">
                      {title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default ServicesButton;
