import React, { FC } from "react";
import RichTextRenderer from "../RichTextRenderer";

interface ContactBox {
  // primary: any;
  // secondary: any;
  jsondata: any;
}

// const ContactBox:FC<ContactBox> = ({ primary, secondary }) => {
//   return (
//     <div className=" flex flex-col rounded-lg justify-end p-6 border-2 h-36 ">
//       <div>
//         <p className="text-center">{primary}</p>
//         <p className="text-xs text-slate-400 text-center">{secondary}</p>
//       </div>
//     </div>
//   );
// };
const ContactBox: FC<ContactBox> = ({ jsondata }) => {
  return (
    <div className=" flex flex-col rounded-lg justify-end p-6 border-2 h-36 ">
      <div>
        <RichTextRenderer json={jsondata.json} />
      </div>
    </div>
  );
};

export default ContactBox;
