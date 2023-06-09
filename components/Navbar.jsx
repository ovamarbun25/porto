import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//IMAGE
import Logo from "../public/assets/navLogo.png";

//ICONS
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdMailOutline, MdPermContactCalendar } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadowNav, setShadowNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadowNav(true);
      } else {
        setShadowNav(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadowNav
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="/" width="75" height="0" />
        </Link>
        <div>
          <ul className="hidden md:flex md:justify-between md:items-center md:gap-8 md:mr-10">
            <Link href="/">
              <li className="text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#contact">
              <li className="text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={navHandler} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
        onClick={navHandler}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="-mt-7 flex w-full items-center justify-between">
            <Image
              src={Logo}
              alt="/"
              width="60"
              height="35"
            />
            <div
              onClick={navHandler}
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">Nice to meet you :)</p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/" onClick={navHandler}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about" onClick={navHandler}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills" onClick={navHandler}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#contact" onClick={navHandler}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect :)
              </p>
              <div className="flex items-center justify-between my-3 py-2 sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/ova-ferdinan-marbun/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://github.com/ovamarbun25" target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="mailto:ovaferdinanmarbun@gmail.com">
                    <MdMailOutline />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="tel:+6282277230412">
                    <MdPermContactCalendar />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
