function Navigation () {
    return (
        <nav className="w-screen px-8 pt-4 grid grid-cols-2">
            <a href="/" className="flex flex-row items-center cursor-pointer">
                <img src="/Logo.svg" alt="logo" className="w-8 h-8 lg:w-14 lg:h-14" />
                <h1 className="font-title font-black text-4xl lg:text-6xl mx-4"> SPARKLINE </h1>
            </a>            
            <menu className="text-2xl font-medium flex-row gap-8 items-end justify-end hidden lg:flex">
                <a href="#about" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> About Us</a>
                <a href="#packages" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md"> Packages </a>
                <a href="#contact" className="ease-in-out duration-200 hover:text-white hover:bg-black px-4 py-2 rounded-md">Contact Us</a>
                <button className="bg-black text-white text-lg font-sub font-semibold px-6 py-2 rounded-md shadow-md ml-4 mr-8 ease-in-out duration-200 hover:bg-gray-50 hover:text-gray-900"> Log In</button>
            </menu>

            <section className="flex lg:hidden flex-row items-center justify-end  ">
                <button> Menu </button>
            </section>
        </nav>
    );
}

export default Navigation;