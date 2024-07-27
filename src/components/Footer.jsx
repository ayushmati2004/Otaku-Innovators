import React from "react";

function Footer() {
  return (
    <div
      data-scroll=""
      data-scroll-section=""
      data-scroll-speed="-0.1"
      className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['FF Basic Gothic']"
    >
      <div className="w-1/2 flex flex-col justify-between h-full ">
        <div className="heading">
          <h1 className="text-[6vw] font-semibold uppercase leading-none mt-20 -mb-15">
            INSIGHTFUL-
          </h1>
          <h1 className="text-[6vw] font-semibold uppercase leading-none -mb-15">
            PUBLICATIONS
          </h1>
        </div>
        <div className="logo">
          <div
            className="w-[128px] h-[120px] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url("ScholarSphere1.png")`,
            }}
          />
        </div>
      </div>
      <div className="w-1/2"></div>
      <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-15 mt-20">
        Presents
        <div className="dets font-['Neue_Montreal'] mt-20 underline">
          {["Facebook", "Instagram", "Twitter"].map((item, index) => (
            <a
              key={index}
              className="block text-xl font-light hover:text-[#ADD8E6] hover:scale-105 transition-transform duration-300"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default Footer;
