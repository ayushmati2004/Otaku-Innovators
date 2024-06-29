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
                    {["Write with us", "AI Chat-bot", "About Us", "Login/Signup", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}
                            href={item === "Write with us" ? "https://prateek2384.github.io/Research_Nexus/" : "#"}
                            target={item === "Write with us" ? "_blank" : ""}
                            rel={item === "Write with us" ? "noopener noreferrer" : ""}
                            className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}
                            href={item === "Login/Signup" ? "https://divyatiwar.github.io/signup-signin/" : "#"}
                            target={item === "Login/Signup" ? "_blank" : ""}
                            rel={item === "Login/Signup" ? "noopener noreferrer" : ""}
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
