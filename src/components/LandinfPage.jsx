import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll-section=""
      data-scroll-speed="-0.8"
      className="w-full h-screen bg-grey-100 pt-1"
    >
      <div className="textstructure mt-60 px-20">
        {["WE DELIVER", "INSIGHTFUL", "PUBLICATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] }}
                    className="mr-[1vw] w-[9vw] rounded-tl rounded-tr rounded-bl rounded-br h-[7.5vw] top-[1vw] relative bg-[#254E58]"
                  ></motion.div>
                )}
                <h1 className="pt-[0.5vw] uppercase text-[7.8vw] leading-[7vw] tracking-tighter font-['FF Basic Gothic'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zince-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For Organisations of all sizes", "From Discovery to innovation"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none hover:text-[#ADD8E6] hover:scale-105 transition-transform duration-300"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <a
            href="https://prateek2384.github.io/Research_Nexus/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full hover:text-[#ADD8E6] hover:scale-105 transition-transform duration-300"
          >
            START WRITING
          </a>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
