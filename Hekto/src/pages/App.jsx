import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

export default function App() {
  return (
    <>
      <header className="text-white bg-[#7E33E0] ">
        <nav className="p-3 flex justify-between width-full text-2xl">
          <div className="flex items-center gap-2">
            <MdEmail className="" />
            <span>123@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Login</span>
            <FaUser />
            <CiShoppingCart className="text-4xl" />
          </div>
        </nav>
      </header>

      <header className=" ">
        <nav className="text-2xl p-4 flex items-center gap-4 w-full border-red-900 border-2">

          <h1 className="font-bold text-5xl">Hekto</h1>

          <div className="flex items-center grow justify-between">
            
            <ul className="flex gap-9">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <form>
              <input className="border-red-400 border-2" />
              <button>
                <IoMdSearch className="border-2 border-black p-4" />
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}
