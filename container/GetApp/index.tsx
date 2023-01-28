import React from "react";
import Container from "../../components/common/Container";
const GetApp = () => {
  return (
    <section className=" bg-blu mt-[74px] ">

    <Container>
      
        <div className="min-w-[220px] md:max-w-[600px]  mx-auto flex items-center justify-items-center">
          <div className=" ">
            <h1 className="sm:text-2xl text-center md:text-6xl 	font-normal mt-[100px]	md:mt-32 text-bluee ">
            <span className=""> Ready to</span>
              <span className="font-bold"> Get the app</span>
              
            </h1>
            <p className=" text-greyy wrap text-center text-base pt-8 leading-8 font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore ad, nesciunt numquam deleniti voluptates tempora
            </p>
            <div className="mt-10 md:mb-[103px] mb-[83px] flex items-center md:justify-center flex-col md:flex-row">
              
              
              <button>
                <img src={"/assets/getapp/Apple.svg"}  />
              </button>
              <button className="md:ml-[30px]">
                <img className="mb-[10px]" src={"/assets/getapp/Googleplay.png"} />
              </button>
             
            </div>
          </div>
        </div>
    
    </Container>
                  </section>
  );
};

export default GetApp;
