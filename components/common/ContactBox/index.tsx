import React, { FC } from "react";
import RichTextRenderer from "../RichTextRenderer";
import styles from "./index.module.scss";
interface ContactBox {
  jsondata: any;
}

const ContactBox: FC<ContactBox> = ({ jsondata }) => {
  return (
    <div className=" flex flex-col rounded-lg justify-end p-6 border-2 h-36 ">
      <div className={`${styles.contactbox}`}>
        <RichTextRenderer json={jsondata.json} />
      </div>
    </div>
  );
};

export default ContactBox;
