import Link from "next/link";
import React, { useEffect } from "react";

//MOTION
import { motion, useAnimationControls } from "framer-motion";

//ICONS
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline, MdPermContactCalendar } from "react-icons/md";

//Observer
import { useInView } from "react-intersection-observer";

const divVariants = {
  h: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0.3,
    },
  },
  v: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
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

const Main = () => {
  const { ref, inView } = useInView();
  const animationControls1 = useAnimationControls();
  const animationControls2 = useAnimationControls();
  const animationControls3 = useAnimationControls();
  const animationControls4 = useAnimationControls();
  const animationControls5 = useAnimationControls();

  const sequence = async () => {
    await animationControls1.start(divVariants.v);
    await animationControls2.start(divVariants.h);
    await animationControls3.start(divVariants.h);
    await animationControls4.start(divVariants.h);
    await animationControls5.start(divVariants.v);
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      sequence();
    }
    if (!inView) {
      animationControls1.start(divVariantsBefore.vMin);
      animationControls2.start(divVariantsBefore.xMin);
      animationControls3.start(divVariantsBefore.xPlus);
      animationControls4.start(divVariantsBefore.xMin);
      animationControls5.start(divVariantsBefore.vPlus);
    }
  }, [inView]);

  return (
    <div id="first" className="w-full h-screen text-center overflow-hidden">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10" ref={ref}>
          <motion.div animate={animationControls1}>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Scroll through to know me better ;)
            </p>
          </motion.div>

          <motion.div animate={animationControls2}>
            <h1 className="py-4 text-gray-700">
              Hi, It's me{" "}
              <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Ova
              </span>
            </h1>
          </motion.div>

          <motion.div animate={animationControls3}>
            <h1 className="py-4 text-gray-700">A Tech Enthusiast</h1>
          </motion.div>

          <motion.div animate={animationControls4}>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I am a software engineer that has a huge interest in software
              engineering, able to work in a team, be responsible, and learn
              about new things, especially in technological development.
            </p>
          </motion.div>

          <motion.div animate={animationControls5}>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
