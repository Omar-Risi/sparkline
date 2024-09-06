import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen flex items-center justify-center flex-col pt-24 ">
                <Hero />
                <About />
            </main>
        </>
    ); 
}

export default App;