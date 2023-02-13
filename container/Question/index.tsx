import React from "react";
import ContactBox from "../../components/common/ContactBox";
import Container from "../../components/common/Container";
import Accordion from "../../components/common/Accordion";
import RichTextRenderer from "../../components/common/RichTextRenderer";
// Styles
import styles from "./index.module.scss";

const Question = ({ data }: any) => {
  const {
    enquiry,
    heading,
    questionsAccordionCollection,
    enquiryContentsCollection,
  } = data.items[0];
  return (
    <section id="english" className="md:mt-[250px] md: mb-[108px]">
      <Container>
        <div className={`text-bluee mb-[44px] ${styles.question}`}>
          <RichTextRenderer json={heading.json} />
        </div>
        <div>
          {questionsAccordionCollection.items.map(
            ({ title, accordionDescription }: any) => (
              <Accordion title={title} jsondata={accordionDescription} />
            )
          )}
        </div>

        <div className={`text-bluee mb-[44px]`}>
          <div
            className={`min-w-[250px] md:w-[600px] mx-auto items-center justify-center mt-[95px] md:mt-32 ${styles.question}`}
          >
            <RichTextRenderer json={enquiry.json} />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-center md:gap-5 gap-5	md:mb-[68px] ">
          {enquiryContentsCollection.items.map(({ description }: any) => (
            <ContactBox jsondata={description} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Question;
