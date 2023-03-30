import Image from "next/image";
import React from "react";

//Image
import Profile from "../public/assets/picture.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen lg:h-110 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4">
        <div className="col-span-2 mt-20 md:mt-0 p-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2">A Glimpse About Me :)</h2>
          <p className="py-2 text-gray-600 text-justify">
            After I complete my high school, I go to one of best tech institute
            in my region named Del Institute of Technology and take software
            engineering technology as my major. The first time I learn about
            software development, I realize that I can turn my writing into an
            useful application or process and I really enjoyed it, since that
            time I can't get enough. I found that developing an application or
            software calls to all my passions; it incorporates creativity,
            problem solving and logical thinking.
          </p>
          <p className="py-2 text-gray-600 text-justify">
            My specialities include quickly learning new skills or programming
            languages, problem solving and Model View Controller (MVC) methods
            of organizing code. So far I have OOP, PHP, HTML,
            CSS, Javascript, Bootstrap, SQL, PostgreSQL, API, Laravel, and Git
            under my belt. I've started learning Go, NodeJS, Express.Js,
            MongoDB, and GraphQL. I'm still enthusiastically grabbing onto any
            other programming languages, frameworks, or principles.
          </p>
        </div>

        <div className="w-fit m-auto  shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-110 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={Profile}
            alt="Ova Marbun"
            width="250"
            height="0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
