import Image from "next/image";
import React, {useEffect} from "react";

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

//Observer
import { useInView } from "react-intersection-observer";

//MOTION
import { motion, useAnimationControls } from "framer-motion";

const divVariants = {
  h: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.3,
      bounce: 0.3,
    },
  },
  v: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1.3,
      bounce: 0.2,
    },
  },
};

const divVariantsBefore = {
  vMin: {
    y: "-100vh",
  },
  vPlus: {
    y: "100vh",
  },
  xMin: {
    x: "-100vw",
  },
  xPlus: {
    x: "100vw",
  },
};

const Skills = () => {
  const { ref, inView } = useInView();

  const animationControls1 = useAnimationControls();
  const animationControls2 = useAnimationControls();

  const sequence = async () => {
    await animationControls1.start(divVariants.v);
    await animationControls2.start(divVariants.h);
  };

  useEffect(() => {
    console.log("this is about page in view " + inView);
    if (inView) {
      sequence();
    }
    if (!inView) {
      animationControls1.start(divVariantsBefore.vMin);
      animationControls2.start(divVariantsBefore.xMin);
    }
  }, [inView]);

  return (
    <div id="skills" className="w-full h-screen p-2 overflow-hidden">
      <div
        ref={ref}
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20 md:mt-0"
      >
        <motion.div animate={animationControls1}>
          <p className=" text-xl uppercase tracking-widest text-[#5651e5]">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
        </motion.div>

        <motion.div animate={animationControls2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              target="_blank"
            >
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

            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
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

            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
