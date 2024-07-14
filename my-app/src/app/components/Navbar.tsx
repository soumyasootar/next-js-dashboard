import Searchbar from "./Searchbar"
import { MdMessage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        Payments
        <span>i How it works</span>
      </div>
      <Searchbar />

      <div className="flex gap-1">
        <div>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 h-8 rounded-full text-xs bg-[#e4e4e4] text-[#474747] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><MdMessage /></span>
          </button>
        </div>
        <div>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 h-8 rounded-full text-xs bg-[#e4e4e4] text-[#474747] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><IoMdArrowDropdown size={18} /></span>
          </button>
        </div>
      </div>
    </div>
  )
}
