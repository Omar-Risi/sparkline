function Packages() {

    function PackageEffect({effectName, checked}) {
        return (
            <li className="grid grid-cols-[1fr_3fr]">
                {checked ? <img src="/Check.svg" alt="check" className="w-8 h-8" /> : <div className="w-8 h-8"></div>}
                <span className="text-xl font-medium font-sub"> {effectName} </span>
            </li>
        )
    }

    function Package({packageName, packagePrice, children}) {
        return (
            <div className="bg-black text-white rounded-md shadow-md px-6 pt-4 pb-8 flex flex-col items-center">
                <h1 className="font-black text-3xl font-title uppercase"> {packageName} </h1>                
                <h3 className="mt-4 font-medium font-sub text-2xl"> {packagePrice}/<span className="font-medium text-gray-500">month</span></h3>

                <ul className="mt-4 flex flex-col items-start w-3/4">
                    {children}
                </ul>

                <button className="mt-10 bg-[#1c1c1c] px-10 py-3 font-medium font-title text-xl rounded-md ease-in-out duration-200 hover:bg-white hover:text-black"> BUY NOW </button>
            </div>
        )
    }

    return(
        <section className="h-screen flex flex-col items-center mt-24 w-screen" id="packages">
            <h1 className="font-title font-black text-4xl lg:text-6xl">OUR PACKAGES</h1> 

            <div className="grid w-3/4 grid-rows-3 lg:grid-cols-3 mt-16 gap-14">
                <Package packageName={"Standard"} packagePrice={"$10"}> 
                    <PackageEffect effectName={"Effect 1"} checked={true} />
                    <PackageEffect effectName={"Effect 2"} checked={false} />
                    <PackageEffect effectName={"Effect 3"} checked={false} />
                </Package>
                <Package packageName={"premium"} packagePrice={"$150"}> 
                    <PackageEffect effectName={"Effect 1"} checked={true} />
                    <PackageEffect effectName={"Effect 2"} checked={true} />
                    <PackageEffect effectName={"Effect 3"} checked={false} />
                </Package>
                <Package packageName={"deluxe"} packagePrice={"$500"}> 
                    <PackageEffect effectName={"Effect 1"} checked={true} />
                    <PackageEffect effectName={"Effect 2"} checked={true} />
                    <PackageEffect effectName={"Effect 3"} checked={true} />
                </Package>
            </div>
        </section>
    )
}

export default Packages;