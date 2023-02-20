import React from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

//styles
import styles from "./index.module.scss";

const WeFresh = ({ data }: any) => {
  const { content } = data.items[0];

  return (
    <section id="forbusiness">
      <Container>
        <div className="min-w-[210px] md:max-w-[600px] mx-auto flex items-center justify-center">
          <div
            className={`min-w-[210px] mt-[50px] md:mt-[104px] ${styles.wefresh}`}
          >
            <RichTextRenderer json={content.json} />
            <div className="min-w-[210px] mt-10 flex md:gap-5 gap-2 justify-center ">
              {/* <div className=" text-base ">
                <Input
                  name="phone"
                  className=" h-8 px-4 w-[170px] md:w-[300px]  hover:bg-slate-50 focus:border-sky-500  rounded outline-none border-sgrey border-2"
                  placeholder="Enter phone number"
                  type="text"
                  id="1"
                />
              </div>
              <div className="mb-[88px]">
                <Button>Send</Button>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeFresh;
