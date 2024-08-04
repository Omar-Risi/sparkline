import PackageBox from "./PackageBox";
import checkIcon from "../public/Check_fill.svg";
import crossIcon from "../public/Dell_fill.svg";

function Packages() {
  return (
    <section>
      <h1 className="text-6xl md:text-8xl font-bold text-center"> OUR PACAKGES </h1>

      <ul className="grid place-content-center grid-rows-3 lg:grid-rows-none  lg:grid-cols-3 gap-8 w-screen px-4 md:px-48 lg:px-48 mt-48">
        <PackageBox>
          <h2 className="text-6xl font-bold">$50</h2>
          <h3 className="text-6xl font-medium mt-4">STANDARD</h3>

          <ul className="font-bold text-lg mt-24 text-left flex flex-col gap-8">
            <li className="flex flex-row items-start">
              <img src={checkIcon} className="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>SEO Audit & Optimization</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Profile Setup & Management</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={crossIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Content Marketing Strategy</span>
            </li>
            <div className="flex flex-row items-start">
              <img src={crossIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Adevrtising Campaign Management</span>
            </div>
            <div className="flex flex-row items-start">
              <img src={crossIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Monthly Reporting & Performance Analysis</span>
            </div>
          </ul>

          <div className="mt-8 w-full grid place-content-center">
            <button className="mt-8 bg-blue-600 font-bold text-xl px-16 py-4 rounded-lg transition-all hover:scale-105">
              Get it now
            </button>
          </div>
        </PackageBox>

        <PackageBox>
          <h2 className="text-6xl font-bold">$250</h2>
          <h3 className="text-6xl font-medium mt-4">PREMIUM</h3>

          <ul className="font-bold text-lg mt-24 text-left flex flex-col gap-8">
            <li className="flex flex-row items-start">
              <img src={checkIcon} className="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>SEO Audit & Optimization</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Profile Setup & Management</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Content Marketing Strategy</span>
            </li>
            <div className="flex flex-row items-start">
              <img src={crossIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Adevrtising Campaign Management</span>
            </div>
            <div className="flex flex-row items-start">
              <img src={crossIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Monthly Reporting & Performance Analysis</span>
            </div>
          </ul>

          <div className="mt-8 w-full grid place-content-center">
            <button className="mt-8 bg-blue-600 font-bold text-xl px-16 py-4 rounded-lg transition-all hover:scale-105">
              Get it now
            </button>
          </div>
        </PackageBox>

        <PackageBox>
          <h2 className="text-6xl font-bold">$500</h2>
          <h3 className="text-6xl font-medium mt-4">DELUXE</h3>

          <ul className="font-bold text-lg mt-24 text-left flex flex-col gap-8">
            <li className="flex flex-row items-start">
              <img src={checkIcon} className="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>SEO Audit & Optimization</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Profile Setup & Management</span>
            </li>

            <li className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Content Marketing Strategy</span>
            </li>
            <div className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Social Media Adevrtising Campaign Management</span>
            </div>
            <div className="flex flex-row items-start">
              <img src={checkIcon} className="min-w-8 max-w-8 w-8 h-8 min-h-8 max-h-8 aspect-square inline" />
              <span>Monthly Reporting & Performance Analysis</span>
            </div>
          </ul>

          <div className="mt-8 w-full grid place-content-center">
            <button className="mt-8 bg-blue-600 font-bold text-xl px-16 py-4 rounded-lg transition-all hover:scale-105">
              Get it now
            </button>
          </div>
        </PackageBox>


      </ul>
    </section>
  )
}

export default Packages;
