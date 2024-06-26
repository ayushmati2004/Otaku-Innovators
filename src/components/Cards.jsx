import React from 'react'

function Cards() {

    return (
        <div data-scroll="" data-scroll-section="" className='w-full h-screen bg-zinc-100 items-center px-32 flex items-center px-32 gap-5'>
            < div className='cardcontainer h-[50vh] w-1/2' >
                <div className='card relative rounded-xl w-full h-full bg-[#17252A] flex items-center justify-center'>
                    <img className="w-32 " src="Research_Nexus-bg.png" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
                </div>
            </div >
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]' >
                <div className='card relative rounded-xl w-1/2 h-full bg-[#254E58] flex items-center justify-center'>
                    <img className="w-60 " src="Arabic .png" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
                </div>
                <div className='card relative rounded-xl w-1/2 h-full bg-[#254E58] flex items-center justify-center'>
                    <img className="w-32 " src="R.png" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
                </div>
            </div >
        </div >
    )
}

export default Cards