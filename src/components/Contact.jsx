function Contact () {
    return (
        <section className="bg-black px-12 pt-24 pb-4 mt-16 w-full flex flex-col items-center" id="contact">
                <h1 className="font-black font-title text-4xl lg:6xl uppercase text-center text-white">contact us</h1>
                <p className="font-medium font-sub text-gray-400 text-xl text-center mt-4"> drop your email below and we'll get back to you!</p>
                
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 mx-8">
                    <input type="email" className="px-2 py-2 mt-4 rounded-md text-lg text-black placeholder:text-gray-600" placeholder="example@local.com"/>
                    <button className="uppercase text-lg px-6 py-2 mt-4 bg-[#1c1c1c] text-white rounded-md ease-in-out duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"> send </button>
                </div>

                <div className="text-gray-200 w-full flex justify-end items-end mt-8"> copyrights@omar-risi</div>
        </section>
    )
}

export default Contact;