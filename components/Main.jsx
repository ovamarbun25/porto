import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline, MdPermContactCalendar } from "react-icons/md";

const Main = () => {
  return (
    <div id="first" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Scroll through to know me better ;)
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, It's me <span className="text-[#5651e5]">Ova</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Tech Enthusiast</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a software engineer that has a huge interest in software
            engineering, able to work in a team, be responsible, and learn about
            new things, especially in technological development.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-3">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/ova-ferdinan-marbun/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/ovamarbun25" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="mailto:ovaferdinanmarbun@gmail.com">
                <MdMailOutline />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="tel:+6282277230412">
                <MdPermContactCalendar />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
