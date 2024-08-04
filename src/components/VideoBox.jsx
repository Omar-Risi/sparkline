function VideoBox() {
    return (
        <div className="bg-black min-h-40 aspect-video w-full flex justify-center items-center cursor-pointer shadow-xl">
            <div onClick={() => alert('this is a demo video player')} className="w-0 h-0 border-y-[1rem] border-l-[2rem] border-r-0 border-y-transparent border-l-white"> </div>
        </div>
    )
}
export default VideoBox;