import React, { useRef, useState } from "react";
import Container from "../../common/Container";
import RichTextRenderer from "../RichTextRenderer";

interface AccordionProps {
  title: React.ReactNode;
  // contentTitle: React.ReactNode;
  // content: React.ReactNode;
  jsondata: any;
}

const Accordion: React.FC<AccordionProps> = ({
  // title,
  // contentTitle,
  // content,
  title,
  jsondata,
}) => {
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
          <div className="w-full m-3 mx-auto  border-bluee border-2 rounded-xl overflow-hidden		">
            {/* <p
              className="w-full pl-[41px] text-bluee font-semibold	pt-[20px]
  wrap  text-base  leading-8 "
            >
              {contentTitle}
            </p>
              <p className="pl-[41px] pr-[60px] text-greyy wrap pt-[12px] pb-[28px] text-base  leading-8 ">
                {content}
              </p> */}
            <RichTextRenderer json={jsondata.json} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Accordion;
