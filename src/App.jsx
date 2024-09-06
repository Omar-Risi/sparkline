import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Navigation />

            <main className="h-screen flex items-center justify-center flex-col ">
                <Hero />
            </main>
        </>
    ); 
}

export default App;