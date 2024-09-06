function About() {
  return (
    <>
    <section className="bg-black text-white mt-24 w-full  px-8 py-16 flex-col flex justify-start items-center" id="about">
      <h1 className="font-title text-4xl lg:text-6xl font-black ">ABOUT US</h1>
      <p className="w-3/4  lg:w-1/2 text-base font-medium lg:text-xl text-center text-gray-400 mt-8 mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
    <section className="flex flex-col justify-center items-center py-24 px-12">
        <h1 className="font-black font-title text-4xl lg:text-6xl text-center"> WE ARE EVERYWHERE</h1>
        <p className="text-gray-600 font-medium text-xl text-center">
            our services are available to everyone, everywhere around the world
        </p>

        <button className="bg-black px-10 py-3 text-xl font-sub text-white font-medium rounded-md shadow-md ease-in-out duration-200 hover:bg-white hover:text-black mt-10">
            SIGN UP
        </button>
    </section>
    </>
  );
}
export default About;
