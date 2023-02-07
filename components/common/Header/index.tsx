import { useState } from "react";
import Link from "next/link";
import Container from "../../common/Container";

const Header = () => {
  const mymenu = [
    {
      title: "Our App",
      id: "ourapp",
    },
    {
      title: "For Business",
      id: "forbusiness",
    },
    {
      title: "About Us",
      id: "aboutus",
    },
    {
      title: "English",
      id: "english",
    },
  ];
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <header
      className={"bg-transparent  top-0 py-8 z-10"}
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
        <div className="h-24 bg-none md:flex justify-between items-center py-4 ">
          <div className="flex z-[3] justify-items-start	  ">
            <img src={"/assets/logo.png"}></img>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="z-[2] text-3xl absolute right-8 top-[25px] py-[40px] cursor-pointer md:hidden w-[15px] h-[12px]"
          >
            {open ? (
              <img
                className="md:hidden z-[3] "
                src="/assets/Close.svg"
                alt="navbar icon"
                onClick={() => setOpen}
              />
            ) : (
              <img
                className=" md:hidden z-[3] "
                src="/assets/menu.svg"
                alt="navbar icon"
                onClick={() => setOpen}
              />
            )}
          </div>

          <ul
            className={`header-nav-container gap-14  flex flex-col md:flex-row
                 md:pb-0  absolute
                 md:static md:z-auto z-[1] left-0 w-full md:w-auto 
                 md:pl-0 pl-6 pr-6 transition-all duration-500 ease-in ${
                   open ? "top-0 " : "top-[-580px] "
                 } `}
          >
            {mymenu.map(({ title, id }) => (
              <li className="li  text-white md:text-black border-blue-100">
                <Link key={id} href={`#${id}`}>
                  {title}
                </Link>
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
