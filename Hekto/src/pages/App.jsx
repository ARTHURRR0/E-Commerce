import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export default function App() {
  return (
    <>
{/* 1st HEADER */}

      <header className="bg-[#7E33E0] text-white text-2xl">
        <nav className="container py-3 flex justify-between">
          <div className="flex gap-4 items-center">
            <MdEmail />
            <span>123@email.com</span>
            <FaPhoneAlt />
            <span>977777283</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>Login</span>
            <FaUser />
            <AiOutlineShoppingCart />
          </div>
        </nav>
      </header>

{/* 2nd HEADER */}
      <header className="text-2xl">
        <nav className="py-5 flex items-center container gap-28">
          <h1 className="font-bold text-5xl">Hekto</h1>
          <div className="flex grow justify-between items-center">
            <ul className="flex gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
            <form className="flex">
              <input className="border-2 border-r-0" />
              <button className="border-2  bg-[#FB2E86] text-white p-3">
                <CiSearch />
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}
