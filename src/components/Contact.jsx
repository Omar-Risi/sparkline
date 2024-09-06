function Contact () {
    return (
        <section className="bg-black px-12 py-24 mt-16 w-screen flex flex-col items-center" id="contact">
                <h1 className="font-black font-title text-4xl lg:6xl uppercase text-center text-white">contact us</h1>
                <p className="font-medium font-sub text-gray-400 text-xl mt-4"> drop your email below and we'll get back to you!</p>
                
                <div className="flex flex-row gap-4 mt-12">
                    <input type="text" placeholder="email@example.co" className="px-4 py-2 rounded-md text-xl font-sub font-medium text-black placeholder:text-gray-400" />
                    <button className="uppercase text-xl text-white bg-gray-900 px-8 py-2 rounded-md font-medium ease-in-out duration-200 hover:bg-white hover:text-black focus:text-black focus:bg-white"> send </button>
                </div>
        </section>
    )
}

export default Contact;