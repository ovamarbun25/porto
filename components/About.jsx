import Image from "next/image";
import React, { useEffect } from "react";

//Image
import Profile from "../public/assets/picture.jpg";

//Observer
import { useInView } from "react-intersection-observer";

//MOTION
import { motion, useAnimationControls } from "framer-motion";

const divVariants = {
  h: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.1,
      bounce: 0.3,
    },
  },
  v: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1.1,
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

const About = () => {
  const { ref, inView } = useInView();

  const animationControls1 = useAnimationControls();
  const animationControls2 = useAnimationControls();
  const animationControls3 = useAnimationControls();

  const sequence = async () => {
    await animationControls1.start(divVariants.v);
    await animationControls2.start(divVariants.v);
    animationControls3.start(divVariants.h);
  };

  useEffect(() => {
    console.log("this is about page in view " + inView);
    if (inView) {
      sequence();
    }
    if (!inView) {
      animationControls1.start(divVariantsBefore.vMin);
      animationControls2.start(divVariantsBefore.vMin);
      animationControls3.start(divVariantsBefore.xPlus);
    }
  }, [inView]);

  return (
    <div
      id="about"
      className="w-full h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4">
        <div ref={ref} className="col-span-2 mt-20 p-4">
          <motion.div animate={animationControls1}>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-2">A Glimpse About Me :)</h2>
          </motion.div>

          <motion.div animate={animationControls2}>
            <p className="py-2 text-gray-600 text-justify">
              After I complete my high school, I go to one of best tech
              institute in my region named Del Institute of Technology and take
              software engineering technology as my major. The first time I
              learn about software development, I realize that I can turn my
              writing into an useful application or process and I really enjoyed
              it, since that time I can't get enough. I found that developing an
              application or software calls to all my passions; it incorporates
              creativity, problem solving and logical thinking.
            </p>
            <p className="py-2 text-gray-600 text-justify">
              My specialities include quickly learning new skills or programming
              languages, problem solving and Model View Controller (MVC) methods
              of organizing code. So far I have OOP, PHP, HTML, CSS, Javascript,
              Bootstrap, SQL, PostgreSQL, API, Laravel, and Git under my belt.
              I've started learning Go, NodeJS, Express.Js, MongoDB, and
              GraphQL. I'm still enthusiastically grabbing onto any other
              programming languages, frameworks, or principles.
            </p>
          </motion.div>
        </div>

        <motion.div animate={animationControls3}>
          <div className="w-fit m-auto md:mt-28 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-110 ease-in duration-300 bg-white">
            <Image
              className="rounded-xl"
              src={Profile}
              alt="Ova Marbun"
              width="250"
              height="0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
