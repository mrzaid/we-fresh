import React, { useRef, useState, useEffect } from "react";
import Container from "../../common/Container";
import RichTextRenderer from "../RichTextRenderer";
import styles from "./index.module.scss";
import { Plus } from "../../common/icon";
import { Minus } from "../../common/icon";

interface AccordionProps {
  title: React.ReactNode;
  jsondata: any;
  active: string;
  handleActive: (id: string) => void;
  id: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  jsondata,
  active,
  handleActive,
  id,
}) => {
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    if (active === id) {
      handleActive("");
    } else {
      handleActive(id);
    }
  }
  useEffect(() => {
    if (active === id) {
      setHeight(`${contentSpace?.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [active]);

  return (
    <Container>
      <div className="flex flex-col">
        <div className="w-full   ">
          <div
            className="w-full flex items-center m-3 mx-auto  border-sgrey border-2	rounded-xl cursor-pointer focus:outline-none "
            onClick={toggleAccordion}
          >
            <button>
              <i className="w-[80px] h-[40px]">
                {active === id ? (
                  <Minus height={40} width={80} color={"#000"} />
                ) : (
                  <Plus height={40} width={80} color={"#000"} />
                )}
              </i>
            </button>

            <p className=" text-left pl-[21px] text-black font-semibold	wrap  text-base p-[20px] leading-8 ">
              {title}
            </p>
          </div>
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
