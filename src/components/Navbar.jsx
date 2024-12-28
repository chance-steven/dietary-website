import { MdMenu } from "react-icons/md";
import { useState } from "react"
import { Link } from "react-router"


const Navbar = () => {
 const [showHumburg,setShowHumburg] =useState(false)
  return (
 <nav className="flex justify-between px-40 bg-white h-10 items-center">
    <h1 className="text-gray-400 text-2xl">Logo</h1>
    <div className="flex md:hidden">
    <MdMenu onClick={() => setShowHumburg(prev =>!prev)} />
    </div>
       <div>
      {showHumburg && (
        <ul className="grid grid-cols-1 gap-4 text-white absolute top-20  py-2 px-3 bg-black md:hidden">
            <Link to="/" className="hover:bg-[#5a7d62]">About</Link>
            <Link  to="" className="hover:bg-[#5a7d62]">Contact</Link>
            <Link to="" className="hover:bg-[#5a7d62]">Home</Link>
        </ul>
      )}
    </div>  
    <ul className="hidden md:flex gap-5 md:justify-end">
        <Link to="/" className="hover:bg-[#5a7d62]">About</Link>
        <Link  to="" className="hover:bg-[#5a7d62]">Contact</Link>
        <Link to="" className="hover:bg-[#5a7d62]">Home</Link>
    </ul>
    
    
 </nav>
  )
}

export default Navbar