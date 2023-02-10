import React from "react";
import Container from "../../common/Container";

interface iconsType {
  socialLink: {
    url: string;
  };
  socialsImage: {
    title: string;
    url: string;
  };
}

const Footer = ({ footerdata }: any) => {
  const { footerSocialsCollection, footerLogo, footerLinksCollection } =
    footerdata?.items[0];

  return (
    <section className=" bg-blu py-[92px]">
      <Container>
        <footer className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 3xl:grid-cols-5 gap-4">
          <div className="px-[20px]">
            <a href="#" className="">
              <img alt={footerLogo.title} src={footerLogo.url} />
            </a>
          </div>
          {footerLinksCollection?.items?.map(
            ({ title, footerLinksCollection }: any) => (
              <nav className="px-[20px]">
                <p className="font-bold ">{title}</p>
                <ul className="  py-[15px]">
                  {footerLinksCollection?.items.map(({ text, url }: any) => (
                    <li className="py-[5px]">
                      <a className="text-greyy" href={url} target="_blank">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          )}

          <nav className="mx-auto">
            <p className="text-greyy ">Available on</p>
            <div className="mt-6 flex gap-5 mb-[60px]">
              {footerSocialsCollection.items.map(
                ({ socialLink, socialsImage }: iconsType) => (
                  <a href={socialLink.url} target="_blank">
                    <button>
                      <img src={socialsImage.url} alt={socialsImage.title} />
                    </button>
                  </a>
                )
              )}
            </div>
          </nav>
        </footer>
        <hr className="pb-[40px]" />
        <p className="text-greyy flex justify-center  ">
          &copy; 2020 WeFresh. All Rights Reserved.
        </p>
      </Container>
    </section>
  );
};

export default Footer;
