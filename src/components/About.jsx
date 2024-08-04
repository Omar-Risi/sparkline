import AboutBox from "./AboutBox";
import timeIcon from "../public/time.svg";
import viewsIcon from "../public/view.svg";

function About() {
  return (
    <section className="mt-8">
      <h1 className="text-5xl md:text-8xl font-bold text-center">
        Did you know?
      </h1>

      <ul className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-8 mt-48 w-screen px-8  md:px-24 lg:px-24" >
        <AboutBox>
          <h4 className="text-2xl font-bold">Each of our clients got over</h4>
          <div className="mt-8 flex justify-center items-center">
            <img src={viewsIcon} alt="time icon" />
          </div>
          <p className="text-4xl font-bold mt-2">1.7M views</p>
        </AboutBox>
        <AboutBox>
          <h4 className="text-2xl font-bold">We have</h4>
          <h1 className="mt-8 text-6xl font-bold text-center">500+</h1>
          <p className="text-4xl font-bold mt-2">Happy Clients</p>
        </AboutBox>
        <AboutBox>
          <h4 className="text-2xl font-bold">Our support is available</h4>
          <div className="mt-8 flex justify-center items-center">
            <img src={timeIcon} alt="time icon" />
          </div>
          <p className="text-4xl font-bold mt-2">24/7</p>
        </AboutBox>
      </ul>
    </section>
  );
}

export default About;
