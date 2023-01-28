import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        

      <div className="max-w-[990px] mx-auto px-6 xl:px-0 ">
        {children}
      </div>
       
    );
  };
  export default Container;
