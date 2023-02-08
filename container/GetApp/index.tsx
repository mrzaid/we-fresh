import React from "react";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

interface iconsType {
  socialLink: {
    url: string;
  };
  socialsImage: {
    url: string;
    title: string;
  };
}

const GetApp = ({ data }: any) => {
  console.log("getapp", data);
  const { appDescription, appSocialsCollection } = data.items[0];
  return (
    <section className=" bg-blu mt-[74px] ">
      <Container>
        <div className="min-w-[220px] md:max-w-[600px]  mx-auto flex items-center justify-items-center">
          <div className=" ">
            {/* <h1 className="sm:text-2xl text-center md:text-6xl 	font-normal mt-[100px]	md:mt-32 text-bluee ">
              <span className=""> Ready to</span>
              <span className="font-bold"> Get the app</span>
            </h1>
            <p className=" text-greyy wrap text-center text-base pt-8 leading-8 font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              tempore ad, nesciunt numquam deleniti voluptates tempora
            </p> */}
            <RichTextRenderer json={appDescription.json} />

            <div className="mt-10 md:mb-[103px] mb-[83px] flex items-center md:justify-center flex-col md:flex-row">
              {/* <button>
                <img src={"/assets/getapp/Apple.svg"}  />
              </button>
              <button className="md:ml-[30px]">
                <img className="mb-[10px]" src={"/assets/getapp/Googleplay.png"} />
              </button> */}
              {appSocialsCollection.items.map(
                ({ socialLink, socialsImage }: iconsType) => (
                  <a href={socialLink.url} target="_blank">
                    <button>
                      <img src={socialsImage.url} alt={socialsImage.title} />
                    </button>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetApp;
