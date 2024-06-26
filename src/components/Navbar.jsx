import React from 'react';

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
                        className="w-[128px] h-[120px] bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url("Research_Nexus-bg.png")`,
                        }}
                    />
                </div>

                <div className="links flex gap-10 px-20">
                    {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                        <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
