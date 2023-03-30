import Image from "next/image";
import React from "react";

import HTML from "../public/assets/skills/html-5.png";
import CSS from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/js.png";
import PHP from "../public/assets/skills/php.jpg";
import NextJS from "../public/assets/skills/nextjs.png";
import ReactJSLogo from "../public/assets/skills/react.png";
import Laravel from "../public/assets/skills/laravel.png";
import SQL from "../public/assets/skills/sql.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Link from "next/link";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20 lg:mt-0">
        <p className=" text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={HTML} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={CSS} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Javascript} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://www.php.net/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={PHP} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PHP</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://nextjs.org/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={NextJS} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://react.dev/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ReactJSLogo} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>ReactJS</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://laravel.com/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Laravel} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Laravel</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://www.w3schools.com/sql/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={SQL} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="https://tailwindcss.com/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 h-24">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Tailwind} alt="/" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Skills;
