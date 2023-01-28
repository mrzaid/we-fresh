import React from "react";
import Container from "../../common/Container";
const Footer = () => {
  return (
    <section className=" bg-blu py-[92px]">
    <Container>

    
    
      <footer className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 3xl:grid-cols-5 gap-4">
        <div className="px-[20px]">
          <a href="#" className="">
            <img
              className=""
              alt="logo"
              src="/assets/WeFreshlogo.png"
            />
          </a>
        </div>
        <nav className="px-[20px]">
          <p className="font-bold ">SERVICE AREA</p>
          <ul className="  py-[15px]">
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem  
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Psum 
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Sum 
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem 
              </a>
            </li>
          </ul>
        </nav>

        <nav className="px-[20px]">
          <p className="font-bold ">ABOUT</p>
          <ul className="  py-[15px]">
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem 
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Psum
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Sum 
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem 
              </a>
            </li>
          </ul>
        </nav>

        <nav className="px-[20px]">
          <p className="font-bold ">HELP</p>
          <ul className="  py-[15px]">
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem 
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Psum
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Sum
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-greyy" href="#">
                Lorem
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mx-auto">
          <p className="text-greyy ">Available on</p>
          <div className="mt-6 flex gap-5 mb-[60px]" >
            <button>
              <img src={"/assets/Apple.png"} />
            </button>
            <button>
              <img src={"/assets/Googleplay.png"} />
            </button>
          </div>
        </nav>

      </footer>
      <hr className="pb-[40px]" />
        <p className="text-greyy flex justify-center  ">
         &copy; 2020 WeFresh. All Rights Reserved.</p>
    </Container>
    </section>
  );
};

export default Footer;
