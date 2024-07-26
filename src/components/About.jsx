import React from "react";
import { PiFileRsThin } from "react-icons/pi";

function About() {
  return (
    <div
      data-scroll=""
      data-scroll-section=""
      data-scroll-speed="-0.25"
      className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#2B7A78] text-black "] '
    >
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[4.5vw]'>
        ResearchNexus is a collaborative platform empowering researchers and
        writers to access comprehensive data effortlessly. It streamlines
        research, content creation, and knowledge sharing, fostering
        productivity and community engagement.
      </h1>

      <div className="w-full flex gap-5 border-t-[2px]  pt-10 mt-20 border-[#254E58]"></div>

      <div class="w-full flex justify-between items-start mx-4">
        <h2 class='font-["Neue_Montreal"] text-[1.5vw] leading-[3vw] w-1/3 mx-4'>
          What you can expect from ResearchNexus:
        </h2>
        <div class="w-2/3 text-left mx-4">
          <h2 class='font-["Neue_Montreal"] text-[1.5vw] leading-[3vw] mb-20 mx-4'>
            Effortless access to comprehensive research tools and resources,
            streamlined content creation processes, and a vibrant community for
            collaboration and knowledge sharing. Whether you're conducting
            in-depth research or crafting compelling articles, our platform is
            designed to enhance your productivity and creativity.
          </h2>
        </div>

        <div class="w-1/3 text-left justify-end mx-4">
          <h2 class='font-["Neue_Montreal"] text-[1.5vw] leading-[3vw] mx-4'>
            S:
          </h2>
          <ul class="mt-4">
            <li>
              <a href="#" class="underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Behance
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-50 border-[#254E58]">
        <div className="w-1/2">
          <h1 className="text-7xl ">Our approach</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[80vh] bg-[#254E58] rounded-lr">
          <img
            className="w-full h-full bg-cover"
            src="https://kiitislibrary.weebly.com/uploads/2/5/1/5/25157369/research-process_orig.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
