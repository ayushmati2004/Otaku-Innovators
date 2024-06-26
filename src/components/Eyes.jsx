import React, { useEffect, useRef, useState } from "react";

function Eyes() {
    const [rotate, setRotate] = useState();

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltax = mouseX - window.innerWidth / 2;
            let deltay = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltay, deltax) * (188 / Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div className="eyes w-full h-[1250px] overflow-hidden bg-gray-100 flex items-center justify-center min-h-screen">

            <div data-scroll="" data-scroll-section="" data-scroll-speed="-0.2" className="items-center justify-center relative w-[1040px] h-[625px] bg-cover bg-center pt-20 bg-red-500 bg-[url('https://assets-global.website-files.com/60ddde2d9425555c614bd8d6/63d7975da083e9b49cee4708_Non-Collateralized-Crypto-Loans_Real-or-Myth_2-p-2000.jpg')]">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                    < div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100' >
                        < div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900' >
                            < div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                < div className='w-10 h-10 rounded-full bg-zinc-100' ></div></div>
                        </div>
                    </div >
                    < div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100' >
                        < div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900' >
                            < div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                < div className='w-10 h-10 rounded-full bg-zinc-100' ></div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Eyes
