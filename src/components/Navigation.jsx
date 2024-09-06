import { useState } from "react";

function Navigation () {

    const [navWidth, setNavWidth] = useState("0");
    function openNav() {
        return setNavWidth("[80vw]")
    }
    function closeNav() {
        return setNavWidth("0");
    }

    return (
        <>
        <nav className="w-screen px-8 pt-4 grid grid-cols-2">
            <a href="/" className="flex flex-row items-center cursor-pointer">
                <img src="/Logo.svg" alt="logo" className="w-8 h-8 lg:w-14 lg:h-14" />
                <h1 className="font-title font-black text-3xl lg:text-6xl mx-4"> SPARKLINE </h1>
            </a>            
            <menu className="text-2xl font-medium flex-row gap-8 items-end justify-end hidden lg:flex">
                <a href="#about" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> About Us</a>
                <a href="#packages" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> Packages </a>
                <a href="#contact" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact Us</a>
                <button className="bg-black text-white text-lg font-sub font-semibold px-6 py-2 rounded-md shadow-md ml-4 mr-8 ease-in-out duration-200 hover:bg-gray-50 hover:text-gray-900"> Log In</button>
            </menu>

            <section className="flex lg:hidden flex-row items-center justify-end  ">
                <button onClick={openNav} className="w-12 h-12"> <img src="/Burger.svg" alt="menu" className="w-full h-full" /></button>
            </section>

            </nav>

            <section className={` bg-gray-200 absolute z-10 right-0 top-0 w-${navWidth} h-screen lg:hidden ease-in-out duration-200`}>
                <button onClick={closeNav} className="w-12 h-12" > <img src="/Burger.svg" alt="Close" className="w-full h-full" /></button>

                <menu className="text-2xl font-medium flex-col gap-8 items-center text-left justify-center mt-24  flex">
                    <a href="#about" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> About Us</a>
                    <a href="#packages" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> Packages </a>
                    <a href="#contact" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact Us</a>
                    <button className="bg-black text-white text-lg font-sub font-semibold px-6 py-2 rounded-md shadow-md ml-4 mr-8 ease-in-out duration-200 hover:bg-gray-50 hover:text-gray-900"> Log In</button>
                </menu>
            </section>

        </>
    );
}

export default Navigation;