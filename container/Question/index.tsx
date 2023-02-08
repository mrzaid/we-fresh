import React from "react";
import ContactBox from "../../components/common/ContactBox";
import Container from "../../components/common/Container";
import Accordion from "../../components/common/Accordion";
const Question = ({data}:any) => {
  return (
    <section id="english" className="md:mt-[250px]">
      <Container>
        <div className="text-bluee mb-[44px]  ">
          <h1 className="text-2xl  md:text-5xl text-center	font-normal 	md:mt-32 text-bluee ">
            <span className="">Got questions?</span>
          </h1>
          <p className="  text-greyy wrap text-center text-base pt-8 pb-8 leading-8 font-normal">
            Perfect, we've got answers!
          </p>
        </div>
        <div>
          <Accordion
            title="How to get started?"
            contentTitle="Lorem ipsum dolor sit amet, consectetur adipis"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Lorem ipsum dolor sit amet"
            contentTitle="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Eiusmod tempor incididunt ut labore et dolore"
            contentTitle="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Quis nostrud exercitation ullamco"
            contentTitle="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
        </div>

        <div className="text-bluee mb-[44px]  ">
          <h1 className="sm:text-2xl md:text-5xl text-center	font-normal mt-[95px]	md:mt-32 text-bluee ">
            <span className="">Still have a question?</span>
          </h1>
          <div className="min-w-[250px] md:w-[600px] mx-auto flex items-center justify-items-center">
            <p className="  text-greyy wrap text-center text-base pt-8 leading-8 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              quibusdam eligendi accusamus! Laborum ratione maxime
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-center md:gap-5 gap-5	md:mb-[68px] ">
          <ContactBox
            primary="+66 8959888"
            secondary="Lorem ipsum dolor sit amet, consectetur"
          />
          <ContactBox
            primary="Support@service.com"
            secondary="Lorem ipsum dolor sit amet, consectetur"
          />
        </div>
      </Container>
    </section>
  );
};

export default Question;
