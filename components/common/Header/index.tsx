import { useState } from "react";
import Container from "../../common/Container";
import styles from "./index.module.scss";
import MenuIcon from "../Icons/menu";
import CloseIcon from "../Icons/close";

const Header = ({ headerdata }: any) => {
  const headerLogo = headerdata?.items[0]?.headerLogo;
  const headerLinksCollection = headerdata?.items[0]?.headerLinksCollection;
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <header
      className={"bg-transparent  top-0 z-10"}
      style={
        open
          ? {
              backgroundColor: "#68BAE3",
              height: "100vh",
              transition: "0.3s all",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <Container>
        <div className="h-24 bg-none md:flex justify-between items-center py-[24px]  ">
          <div className="flex z-[3] justify-items-start	  ">
            <img src={headerLogo?.url} alt={headerLogo?.title}></img>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="z-[2] text-3xl absolute right-8  top-[22px] cursor-pointer md:hidden w-[15px] h-[12px]"
          >
            {open ? (
              <button onClick={() => setOpen}>
                <MenuIcon />
              </button>
            ) : (
              <button onClick={() => setOpen}>
                <CloseIcon />
              </button>
            )}
          </div>

          <ul
            className={`${styles.headernav} gap-14  flex flex-col md:flex-row
                 md:pb-0  absolute
                 md:static md:z-auto z-[1] left-0 w-full md:w-auto 
                 md:pl-0 pl-6 pr-6 transition-all duration-500 ease-in ${
                   open ? "top-0 " : "top-[-580px] "
                 } `}
          >
            {headerLinksCollection?.items?.map(({ text, url }: any) => (
              <li className="li  text-white md:text-black border-blue-100">
                <a
                  className={`${styles.hoverunderline}`}
                  href={url}
                  target={"_blank"}
                >
                  {text}
                </a>
              </li>
            ))}

            <li className="navbar-button w-full md:hidden">
              <button className="bg-orangee min-w-[280px] w-full rounded h-8">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
