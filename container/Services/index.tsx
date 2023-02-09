import React, { useState } from "react";
import { Freshmart } from "./Freshmart";
import ServicesButton from "./ServicesButtons";
import "swiper/css";

const Services = ({ data }: any) => {
  const { servicesContentCollection, title } = data?.items[0];
  const initialContent = servicesContentCollection?.items[0];
  const [content, setContent] = useState(initialContent);
  const saveContent = (label: string) => {
    const result = servicesContentCollection.items.find(
      ({ title }: any) => title === label
    );
    setContent(result);
  };

  return (
    <div>
      <ServicesButton
        data={servicesContentCollection}
        heading={title}
        sendContent={saveContent}
      />
      <Freshmart data={content} />
    </div>
  );
};

export default Services;
