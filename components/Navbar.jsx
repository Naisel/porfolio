import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed-w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-3 2xl:px-16">
        <Image
          className="rounded"
          src="/../public/assets/navLogo.png"
          alt=""
          height={200}
          width={150}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                projects
              </li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              className="flex w-full
          items-center justify-between"
            >
              <div>
                <Image
                  className="rounded"
                  src="/../public/assets/navLogo.png"
                  alt=""
                  height={200}
                  width={125}
                />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's build together</p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href={"/"}>
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href={"/"}>
                  <li className="py-4 text-sm">about</li>
                </Link>
                <Link href={"/"}>
                  <li className="py-4 text-sm">skills</li>
                </Link>
                <Link href={"/"}>
                  <li className="py-4 text-sm">projects</li>
                </Link>
                <Link href={"/"}>
                  <li className="py-4 text-sm">contact</li>
                </Link>
              </ul>
              <div className="pt-24">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
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
