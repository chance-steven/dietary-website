
const Health = () => {
  return (
    <div className="grid grid-cols-1 bg-[#5a7d62] sm:grid-cols-1 lg:grid-cols-2  ">
        <div className="text-white py-10  text-center">
            <h1 className="text-3xl lg:text-4xl">Be healthy,<br />
             enjoy life!</h1>
             <p className="text-sm ml-36">Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
             <p className="pb-6 text-sm ml-36">laboris nisi ut aliquip ex ea commodo consequat</p>
             <p className="pb-6 text-sm">Image from <a>Freepik</a></p>
             <button className="border border-white px-5 py-1 rounded-md hover:bg-white hover:text-[#5a7d62]">JOIN NOW</button>
        </div>
        <div className="sm:pl-20 lg:py-10 xl:py-0 ">
            <img src="/public/photo.avif" alt=""></img>
        </div>
    </div>
  )
}

export default Health