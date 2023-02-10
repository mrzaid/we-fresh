import React, { useRef, useState } from "react";
import Container from "../../common/Container";
import RichTextRenderer from "../RichTextRenderer";
import styles from "./index.module.scss";

interface AccordionProps {
  title: React.ReactNode;
  jsondata: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, jsondata }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);

    setHeight(active ? `${contentSpace?.current?.scrollHeight}px` : "0px");
  }

  return (
    <Container>
      <div className="flex flex-col">
        <div className="w-full   ">
          <button
            className="w-full  m-3 mx-auto  border-sgrey border-2	rounded-xl cursor-pointer focus:outline-none "
            onClick={toggleAccordion}
          >
            <div>
              <p className=" text-left pl-[41px] text-black font-semibold	wrap  text-base p-[20px] leading-8 ">
                {title}
              </p>
            </div>
          </button>
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-hidden transition-max-height duration-700 ease-in-out"
        >
          <div
            className={`w-full m-3 mx-auto  border-bluee border-2 rounded-xl overflow-hidden ${styles.accordion}`}
          >
            <RichTextRenderer json={jsondata.json} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Accordion;
