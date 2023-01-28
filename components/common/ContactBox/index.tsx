import React ,{ FC } from "react";
interface ContactBox {
    primary:any;
    secondary:any;
  }
const ContactBox:FC<ContactBox> = ({ primary, secondary }) => {
  return (
    <div className=" flex flex-col rounded-lg justify-end p-6 border-2 h-36 ">
      <div>
        <p className="text-center">{primary}</p>
        <p className="text-xs text-slate-400 text-center">{secondary}</p>
      </div>
    </div>
  );
};

export default ContactBox;
