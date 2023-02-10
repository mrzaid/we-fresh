import React from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";
const WeFresh = ({ data }: any) => {
  const { content } = data.items[0];

  return (
    <section id="forbusiness" className="">
      <Container>
        <div className="min-w-[210px] md:max-w-[600px] mx-auto flex items-center justify-items-center">
          <div className="min-w-[210px] ">
            {/* <h1 className="sm:text-2xl text-center md:text-6xl	font-normal	mt-[50px] md:mt-32 text-bluee ">
              <span className="font-bold"> WeFresh</span>
              <span className=""> for business</span>
            </h1>
            <p className=" text-greyy wrap text-center text-base pt-8 leading-8 font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore ad, nesciunt numquam deleniti voluptates tempora iure nulla, 
              enim suscipit 
            </p> */}
            <RichTextRenderer json={content.json} />
            <div className="min-w-[210px] mt-10 flex md:gap-5 gap-2 justify-center ">
              <div className=" text-base ">
                <Input
                  className=" h-8 p-4 w-[170px] md:w-[300px] rounded  border-sgrey border-2"
                  placeholder="Enter phone number"
                  type="text"
                  id="1"
                />
              </div>
              <div className="mb-[88px]">
                <Button
                  onClick={() =>
                    console.log("You clicked on the orange button!")
                  }
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeFresh;
