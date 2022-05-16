import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {

  return (
    <div className="py-3 px-9 bg-[#00000030] backdrop-blur-2xl w-max rounded-2xl h-20 flex flex-row gap-9 fixed bottom-5 left-1/2 translate-x-middle z-10">
      <Link activeClass="active" className="my-auto flex text-[#ffffff]/50 hover:text-white transition-all duration-150 cursor-pointer" to="realisation" spy={true} smooth={true}>
        <i className="ri-home-line ri-xl m-auto"></i>
      </Link>
      <Link className="my-auto flex text-[#ffffff]/50 hover:text-white transition-all duration-150 cursor-pointer" to="about" spy={true} smooth={true}>
        <i className="ri-user-4-line ri-xl m-auto"></i>
      </Link>

      <Link className="my-auto flex text-[#ffffff]/50 hover:text-white transition-all duration-150 cursor-pointer" to="skills" spy={true} smooth={true}>
        <i className="ri-tools-fill ri-xl m-auto"></i>
      </Link>

      
      <Link className="my-auto flex text-[#ffffff]/50 hover:text-white transition-all duration-150 cursor-pointer" to="ressources" spy={true} smooth={true}>
        <i className="ri-book-2-line ri-xl m-auto"></i>
      </Link>
      <Link className="my-auto flex text-[#ffffff]/50 hover:text-white transition-all duration-150 cursor-pointer" to="contact" spy={true} smooth={true}>
        <i className="ri-chat-3-line ri-xl m-auto"></i>
      </Link>

      {/* <Link activeClass="active" to="skills" spy={true} smooth={true} className="my-auto flex" href="/">
        <i className="ri-home-line ri-xl m-auto"></i>
      </Link> */}
      
    </div>
    
  );
};

export default Navigation;
