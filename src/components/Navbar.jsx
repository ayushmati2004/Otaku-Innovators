import React from "react";

function Navbar() {
  return (
    <div>
      <div
        data-scroll
        data-scroll-section=""
        className="fixed z-[999] w-full px-20 py-8 font-[Neue Montreal] flex justify-between items-center"
      >
        <div className="logo">
          <div
            className="w-[108px] h-[120px] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://cdn.prod.website-files.com/66325be5c91d02733ec6bfcc/667fdd1b432df1a9f0a094e5_Research_Nexus-removebg1.png")`,
            }}
          />
        </div>

        <div className="links flex gap-10 px-20">
          {[
            "Write with us",
            "AI Chat-bot",
            "About Us",
            "Login/Signup",
            "Contact",
          ].map((item, index) => (
            <a
              key={index}
              className={`text-lg capitalize font-light ${
                index === 4 && "ml-32"
              } transition-all duration-300 transform hover:text-[#ADD8E6] hover:scale-105 hover:underline hover:underline-offset-4`}
              href={
                item === "Write with us"
                  ? "https://prateek2384.github.io/Research_Nexus/"
                  : item === "Login/Signup"
                  ? "https://divyatiwar.github.io/signup-signin/"
                  : "#"
              }
              target={
                item === "Write with us" || item === "Login/Signup"
                  ? "_blank"
                  : ""
              }
              rel={
                item === "Write with us" || item === "Login/Signup"
                  ? "noopener noreferrer"
                  : ""
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
