import VideoBox from "./VideoBox";

function Hero() {
  return (
    <section className="py-20 mx-8">
      {/* Title and subtitle */}
      <div>
        <h1 className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#005546] to-[#3a61ec] "> SPARKLINE </h1>
        <p className="text-center text-2xl"> Igniting results through Innovative digital marketing! </p>
      </div>

      {/* Video Section  */}
      <div className="mt-24 flex flex-col items-center">
        <VideoBox />
        <p className="mt-4 text-center text-2xl"> Check out how we got Jake 10K+ followers in just 1 month...</p>
      </div>

      {/* CTA button */}
      <div className="mt-2 flex justify-center items-center">
        <button className="bg-gradient-to-r from-[#0a67e9] to-[#063a83] px-8 py-4 rounded-xl shadow-lg text-2xl font-bold mt-4 transition-all hover:scale-105">
          FREE CONSULTATION
        </button>
      </div>


    </section>
  )
}

export default Hero;
