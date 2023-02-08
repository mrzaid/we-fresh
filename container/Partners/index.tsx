import React from "react";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";



import styles from "./index.module.css";

export const Partners = ({data}:any) => {
  console.log('partners',data)
  const {partnerImagesCollection,partnersContent}=data.items[0]


  return (
    <section className="mt-[150px] md:mb-[100px] relative">
      <div
        className={
          "md:hidden absolute  right-0 left-0 h-[50vh]  z-[-1]  "}
      >
        <img className="h-full w-full " src={"/assets/partners/partnersmq.svg"} />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:m-0 gap-[50px] ">
          <div className="  flex flex-col items-center md:mb-[133px] md:mb-0 relative">
            <h1 className="text-2xl md:text-6xl	font-normal	mt-32 mx-auto md:ml-0 text-center md:text-left  ">
              <span className="text-bluee	">Our </span>
              <span className=" text-bluee	 font-bold">Partners</span>
            </h1>
            <div className=" min-w-[220px] max-w-[400px] text-center md:text-left  mt-10  md:w-80 mx-auto md:ml-0">
              
              {/* <p className="text-greyy font-normal text-xl   ">
                Lorem ipsum dolor sit, amet tene consectetur adipisisdsadcing
                elit. Vero, tenetur assumenda reiciendis esse aasdas dasd fdasf
                ccusamus, culpa alias eum non deleniti
              </p> */}
              <RichTextRenderer
              json={partnersContent.json}
              />
            </div>
            <div
              className={
                "hidden md:block absolute  mx-auto  z-[-1] " + styles.bgimg
              }
            >
              <img className="w-full" src={"/assets/partners/Circle.png"} />
            </div>
          </div>

          <div className="md:justify-end md:relative md:right-0  sm:justify-center sm:right-0 pt-[50px]  relative mb-[100px]">
            <div className={"h-[350px] relative w-[600px]" + styles.partnerImgs}>
           {/*  <div
                className={value.title==="7-Eleven" ? " bg2 absolute sm:top-[85px]  sm:right-0  top-[125px] right-0 w-full max-w-[91px] sm:max-w-[175px] "
              : 
              
              }
              > */}
              
              <div
                className="bg1  absolute sm:top-0 sm:left-[-15px] top-[100px]
              w-full max-w-[91px] sm:max-w-[175px]"
              >
                <img
                  className="w-full "
                  src={"/assets/partners/7-Eleven.svg"}
                  alt=""
                />
              </div>
              <div
                className=" bg2 absolute sm:top-[85px]  sm:right-0  top-[125px] right-0
               w-full max-w-[91px] sm:max-w-[175px] "
              >
                <img
                  className="w-full "
                  src={"/assets/partners/TrueYou.svg"}
                  alt=""
                />
              </div>
              <div
                className=" bg3 absolute  top-[70%] left-[50%] translate-x-[-65%] translate-y-[-50%]
              w-full max-w-[91px] sm:max-w-[175px]"
              >
                <img
                  className="w-full "
                  src={"/assets/partners/TrueCoffee.svg"}
                  alt=""
                />
              </div>
              <div
                className=" bg4 absolute  sm:top-[308px]  sm:left-[-15px]  top-[265px]
              w-full max-w-[91px] sm:max-w-[175px]"
              >
                <img
                  className="w-full "
                  src={"/assets/partners/Makro.svg"}
                  alt=""
                />
              </div>
              <div
                className=" bg5 absolute  sm:top-[338px]   sm:right-0   top-[275px] right-[25px]
              w-full max-w-[91px] sm:max-w-[175px]"
              >
                <img
                  className="w-full "
                  src={"/assets/partners/CpFreshmart.svg"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
