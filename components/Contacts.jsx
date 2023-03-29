import Image from "next/image";
import React from "react";

import GIT from "../public/assets/skills/git.jpg";


//ICONS
import { FaGithub, FaAngleDoubleUp, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline, MdPermContactCalendar } from "react-icons/md";
import Link from "next/link";

const Contacts = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] mt-10">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* CARD */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-2 h-full">
              <div>
                <Image
                  src={GIT}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="Get In Touch"
                />
              </div>
              <div>
                <h2 className="py-2">Ova Ferdinan Marbun</h2>
                <p>Front End Developer</p>
                <p className="py-4">
                  I am looking for a new opportunity. Contact me for further
                  discussion.
                </p>
              </div>

              <div className="lg:pt-10">
                <p className="uppercase pt-8">Connect With Me</p>

                <div className="flex items-center justify-between py-6 md:max-w-[600px] md:m-auto">
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

          {/* FORM */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="8"
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaAngleDoubleUp className="text-[#5651e5] m-auto" size={25 }/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
