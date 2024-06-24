import React from 'react'
import { PiFileRsThin } from 'react-icons/pi'

function About() {
    return (
        <div data-scroll="" data-scroll-section="" data-scroll-speed="-0.2" className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black "] '>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[5vw]'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className='w-full flex gap-5 border-t-[2px]  pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-7xl '>Our approach</h1>
                    <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white'>
                        Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl'></div>
            </div>
        </div>
    )
}

export default About
