import Link from "next/link";
import React, { useEffect } from "react";

//MOTION
import { motion, useAnimation } from "framer-motion";

//ICONS
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline, MdPermContactCalendar } from "react-icons/md";

//Observer
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref, inView } = useInView();

  const animationUp = useAnimation();
  const animationDown = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  const startAnimationUp = () => {
    animationUp.start({
      y: 0,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.3,
        delay:0.2
      },
    });
  };

  const startAnimationLeft = () => {
    animationLeft.start({
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.3,
        delay:0.2
      },
    });
  };

  const startAnimationRight = () => {
    animationRight.start({
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.3,
        delay:0.2
      },
    });
  };

  const startAnimationDown = () => {
    animationDown.start({
      y: 0,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.3,
        delay:0.2
      },
    });
  };

  const leftBeforeAnimation = () => {
    animationLeft.start({
      x: "-100vw",
    });
  };

  const rightBeforeAnimation = () => {
    animationRight.start({
      x: "100vw",
    });
  };

  const upBeforeAnimation = () => {
    animationUp.start({
      y: "-100vh",
    });
  };

  const downBeforeAnimation = () => {
    animationDown.start({
      y: "100vh",
    });
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      startAnimationUp();
      startAnimationLeft();
      startAnimationRight();
      startAnimationDown();
    }
    if (!inView) {
      upBeforeAnimation();
      leftBeforeAnimation();
      rightBeforeAnimation();
      downBeforeAnimation();
    }
  }, [inView]);

  return (
    <div ref={ref} id="first" className="w-full h-screen/9 text-center overflow-hidden">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <motion.div animate={animationUp}>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Scroll through to know me better ;)
            </p>
          </motion.div>

          <motion.div animate={animationLeft}>
            <h1 className="py-4 text-gray-700">
              Hi, It's me{" "}
              <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Ova
              </span>
            </h1>
          </motion.div>

          <motion.div animate={animationRight}>
            <h1 className="py-4 text-gray-700">A Tech Enthusiast</h1>
          </motion.div>

          <motion.div animate={animationDown}>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I am a software engineer that has a huge interest in software
              engineering, able to work in a team, be responsible, and learn
              about new things, especially in technological development.
            </p>
          </motion.div>

          <motion.div animate={animationDown}>
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
