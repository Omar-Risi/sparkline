import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";

function App() {
  return (
    <main className="min-h-screen w-screen flex flex-col gap-16 items-center text-white text-xl pb-16">

      {/* Hero */}
      <Hero /> 
      
      {/* About (METRICS) */}
      <About />

      {/* Packages */}
      <Packages />

    </main>
  )
}

export default App;
