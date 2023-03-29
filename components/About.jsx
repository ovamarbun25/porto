import Image from "next/image";
import React from "react";

//Image
import Profile from "../public/assets/picture.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 mt-10">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-2">A Glimpse About Me :)</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            atque voluptatum perspiciatis molestiae aut voluptas ullam
            necessitatibus exercitationem velit quo quod odit, dolores autem?
            Beatae itaque voluptatum mollitia reiciendis rem.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            suscipit repudiandae incidunt nisi? Sed id minima atque blanditiis
            possimus vel consequuntur magnam perferendis. Similique, officiis!
          </p>
        </div>

        <div className="w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-110 ease-in duration-300">
            <Image className="rounded-xl" src={Profile} alt="Ova Marbun" width='250' height='0'/>
        </div>
      </div>
    </div>
  );
};

export default About;
