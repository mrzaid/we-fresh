import React from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import styles from "./index.module.scss";
import RichTextRenderer from "../../components/common/RichTextRenderer";

const FindUs = ({ data }: any) => {
  const { findUsImage, title } = data.items[0];
  return (
    <section id="aboutus" className="relative">
      <div className={styles.bg1}>
        <img src={"/assets/findusblue.png"} />
      </div>
      <div className={styles.bg2}>
        <img src={"/assets/findusyellow.png"} />
      </div>
      <Container>
        <div className={" flex " + styles.mq}>
          <div className="  flex  justify-center    ">
            <div className=" pb-32 mt-32">
              {/* <h1 className=" text-2xl md:text-5xl	font-normal	 text-bluee  ">
                <span className="">Find us in these</span>
                <span className="font-bold"> Area</span>
              </h1> */}
              <RichTextRenderer json={title.json} />
              <div className="mt-10 flex gap-5 ">
                <div className=" text-base ">
                  <Input
                    className=" h-8 p-4 w-[170px] md:w-[300px] rounded  border-sgrey border-2	"
                    placeholder="Enter your area"
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
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="  relative flex flex-col justify-end">
            <div className="mx-auto md:ml-[20px] findus ">
              <img
                className="md:pl-[30px]"
                src={findUsImage.url}
                alt={findUsImage.title}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FindUs;
