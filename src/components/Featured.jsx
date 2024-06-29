import { easeIn, motion, useAnimation } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    motion
    return (
        <div data-scroll="" data-scroll-section="" className="w-full py-20 ">
            <div className="w-full px-20 border-b-[1px) border-zinc-700 pb-20">
                <h1 className='text-7xl font-["Neue_Montereal"]'>
                    Featured projects
                </h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#254E58] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"Pragmatism & Idealism".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className="inline-block">
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="card w-full h-full rounded-xl overflow-hidden "><a href="https://www.geeksforgeeks.org/difference-between-pragmatism-and-idealism/?utm_source=auth&utm_medium=saved&utm_campaign=articles">
                            <img className='w-full h-full bg-cover' src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/4/d4b7d60a72614d468ff9e7f527f64b5fe4f0b08da5304de2493fcd9d2ad71140/pragmatism-slide2.png" alt="" /></a>

                        </div>
                    </motion.div>


                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#254E58] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"Disinfection & Sterilization".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className="inline-block">
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="card w-full h-full rounded-xl overflow-hidden "><a href="https://www.geeksforgeeks.org/difference-between-disinfection-and-sterilization/?utm_source=auth&utm_medium=saved&utm_campaign=articles">
                            <img className='w-full h-full bg-cover' src="https://img.freepik.com/free-vector/worker-with-biohazard-suit-disinfecting-particles-illustration_24877-71226.jpg" alt="" /></a>

                        </div>
                    </motion.div>

                </div>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#FFFFFF] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"Asymmetric Encryption".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className="inline-block">
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="card w-full h-full rounded-xl overflow-hidden "><a href="https://www.geeksforgeeks.org/what-is-asymmetric-encryption/?utm_source=auth&utm_medium=saved&utm_campaign=articles">
                            <img className='w-full h-full bg-cover' src=".//Assem.jpeg" alt="" /></a>

                        </div>
                    </motion.div>


                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#FFFFFF] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"IPv6".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className="inline-block">
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="card w-full h-full rounded-xl overflow-hidden "><a href="https://www.geeksforgeeks.org/advantages-of-ipv6/?utm_source=auth&utm_medium=saved&utm_campaign=articles">
                            <img className='w-full h-full bg-cover' src="ipv6.jpeg" alt="" /></a>

                        </div>
                    </motion.div>
                </div>


            </div>
        </div >
    );
}

export default Featured;

