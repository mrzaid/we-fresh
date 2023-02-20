import { useState, useEffect } from "react";
import Container from "../../common/Container";
import styles from "./index.module.scss";
import { MenuIcon } from "../../common/icon";
import { CloseIcon } from "../../common/icon";
import Link from "next/link";

const Header = ({ headerdata }: any) => {
  const headerLogo = headerdata?.items[0]?.headerLogo;
  const headerLinksCollection = headerdata?.items[0]?.headerLinksCollection;
  const [open, setOpen] = useState<Boolean>(false);

  useEffect(() => {
    if (open) {
      window.document.body.style.height = "100vh";
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.height = "fit-content";
      window.document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header
      className={`bg-transparent top-0 z-10  `}
      style={
        open
          ? {
              backgroundColor: "#68BAE3",

              transition: "0.5s all",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <Container>
        <div className="h-24 md:bg-transparent md:flex justify-between items-center py-[24px] ">
          <div className="flex z-[3] justify-items-start">
            <img src={headerLogo?.url} alt={headerLogo?.title}></img>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="z-[2] text-3xl absolute right-8  top-[22px] cursor-pointer md:hidden w-[15px] h-[12px]"
          >
            {open ? (
              <button onClick={() => setOpen}>
                <CloseIcon height={16} width={15} color={"#000"} />
              </button>
            ) : (
              <button onClick={() => setOpen}>
                <MenuIcon height={16} width={15} color={"#000"} />
              </button>
            )}
          </div>

          <ul
            className={`${styles.headernav} gap-9  flex flex-col md:flex-row
                 md:pb-0  absolute  md:bg-transparent
                 md:static md:z-auto z-[1] left-0 w-full md:w-auto md:mt-[45px] mt-0
                 pl-0 pl-6 pr-6 transition-all duration-300 ease-in-out  bottom-0 ${
                   open ? "bg-bluee" : " -translate-y-full  "
                 } `}
          >
            {headerLinksCollection?.items?.map(({ text, url }: any) => (
              <li className="li  text-white md:text-black border-blue-100">
                <Link href={url}>
                  <a className={`${styles.hoverunderline}`} target={"_blank"}>
                    {text}
                  </a>
                </Link>
              </li>
            ))}
            <Link href={"/"} locale="en-US">
              <a>
                <button
                  className="relative group px-6 h-6 bg-bluee
                 before:absolute 
                 before:inset-0 
                 before:bg-blue-400
                 before:scale-x-0 
                 before:origin-right
                 before:transition
                 before:duration-300
                 hover:before:scale-x-100
                 hover:before:origin-left
                 "
                >
                  <span className="relative  text-base text-white">
                    English
                  </span>
                </button>
              </a>
            </Link>
            <Link href={"/"} locale="fr">
              <a>
                <button
                  className="relative group px-6 h-6 bg-bluee
                 before:absolute 
                 before:inset-0 
                 before:bg-blue-400
                 before:scale-x-0 
                 before:origin-right
                 before:transition
                 before:duration-300
                 hover:before:scale-x-100
                 hover:before:origin-left
                 "
                >
                  <span className="relative  text-base text-white">French</span>
                </button>
              </a>
            </Link>
            <li className="navbar-button w-full md:hidden">
              <button className="bg-orangee min-w-[280px] w-full rounded h-8">
                Sign up
              </button>
            </li>
          </ul>
          <div className="flex gap-3"></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
