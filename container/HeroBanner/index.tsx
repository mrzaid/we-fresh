//Packages
import React, { useState } from "react";

// Components
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

// Styles
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

const HeroBanner = ({ data }: any) => {
  const { heroDescription, heroImage, heroSocialsCollection } = data?.items[0];

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    console.log("hello", e);
  };
  return (
    <section id="ourapp">
      <div className={styles.herobannerImg1}>
        <img src={"/assets/hero/Fill4.png"} alt="bannerBgImg1" />
      </div>
      <div className={styles.herobannerImg2}>
        <img src={"/assets/hero/Fill1.png"} alt="bannerBgImg2" />
      </div>
      <div className={styles.herobannerImg5}>
        <img src={"/assets/hero/Fill3.png"} alt="bannerBgImg5" />
      </div>
      <Container>
        <div className=" main flex flex-col md:flex-row  ">
          <div
            className={`max-w-[421px] mx-auto md:ml-0 ${styles.herocontainer}`}
          >
            <div
              className={
                "md:hidden absolute top-0 left-0 right-0 translate-y-[-100px]  z-[-1] min-h-[600px] "
              }
            >
              <img
                className=" w-full h-full"
                style={{ height: "600px" }}
                src={"/assets/fill4mq.png"}
              />
            </div>

            <div className={` md:mt-32  ${styles.banner}`}>
              <RichTextRenderer json={heroDescription.json} />
            </div>
            <div className="mt-10 flex gap-5 justify-center	">
              <form name="contact" method="POST" data-netlify="true" action="/">
                <div className={`text-base pl-[55px] ${styles.inputfield} `}>
                  <Input
                    className=" h-8 px-4 w-[170px] md:w-[300px] rounded outline-none hover:bg-slate-50 focus:border-sky-500  border-sgrey border-2"
                    placeholder="Enter phone number"
                    type="text"
                    name="phone"
                    id="1"
                  />
                </div>
                <div>
                  <Button>Send</Button>
                </div>
              </form>
            </div>
            <p className="text-center md:text-left text-white mt-8">
              Available on
            </p>
            <div className="  mt-6 flex justify-center md:justify-start gap-5 mb-[100px]">
              {heroSocialsCollection.items.map(
                ({ socialLink, socialsImage }: iconsType) => (
                  <a href={socialLink.url} target="_blank">
                    <button>
                      <img src={socialsImage.url} alt={socialsImage.title} />
                    </button>
                  </a>
                )
              )}
            </div>

            <div
              className={` md:relative md:bottom-[300px] md:right-0 md:w-4.5/12 md:z-[-2] ${styles.herobannerImg4} `}
            >
              <img className={"absolute"} src={"/assets/hero/Fill5.png"} />
            </div>
          </div>

          <div className=" flex flex-row mx-auto md:mr-0 right-0 max-w-[481px]  relative  mb-[40px]">
            <div className={styles.herobgYellow}>
              <img
                className="w-full"
                src={"/assets/hero/Fill2.png"}
                alt="bg-yellow"
              />
            </div>
            <div
              className={`right-0 md:pt-0 pt-[40px] ${styles.herobannerImg}`}
            >
              <img src={heroImage.url} alt={heroImage.title} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
