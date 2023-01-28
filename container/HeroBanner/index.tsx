import React from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import styles from "./index.module.css";
const HeroBanner = () => {
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
        <div className=" main flex flex-col md:flex-row ">
          <div className="max-w-[481px] mx-auto md:ml-0   ">
            <div
              className={
                "md:hidden absolute top-0 left-0 right-0 translate-y-[-100px]  z-[-1]  h-[58vh] "
              }
            >
              <img className="h-full w-full" src={"/assets/fill4mq.png"} />
            </div>

            <h1 className="text-2xl md:text-6xl text-center md:text-left	font-normal	md:mt-32  ">
              <span className="text-white	">The smarter way</span>
              <br></br>
              <span className=" text-white	 font-bold">to order your food</span>
            </h1>
            <div className="mt-10 flex gap-5 ">
              <div className=" text-base ">
                <Input
                  className=" h-8 p-4 w-[170px] md:w-[300px] rounded  border-sgrey border-2"
                  placeholder="Enter phone number"
                  type="text"
                  id="1"
                />
              </div>
              <div>
                <Button
                  onClick={() =>
                    console.log("You clicked on the orange button!")
                  }
                >
                  Send
                </Button>
              </div>
            </div>
            <p className="text-center md:text-left text-white mt-8">
              Available on
            </p>
            <div className="  mt-6 flex justify-center md:justify-start gap-5 mb-[100px]">
              <button>
                <img src={"/assets/Apple.png"} />
              </button>
              <button>
                <img src={"/assets/Googleplay.png"} />
              </button>
            </div>

            <div
              className={
                "hidden md:block md: relative md:bottom-[300px] md:right-0 md:w-4.5/12 md:z-[-2]  "
              }
            >
              <img className={"absolute"} src={"/assets/hero/Fill5.png"} />
            </div>
          </div>

          <div className=" flex flex-row mx-auto md:mr-0 right-0 max-w-[481px]  relative  mb-[40px]">
            <div className={styles.herobgYellow}>
              <img className="w-full" src={"/assets/hero/Fill2.png"} alt="bg-yellow" />
            </div>
            <div className={"right-0" + styles.herobannerImg}>
              <img src={"/assets/hero/iPhone_Black.svg"} alt="phone" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
