import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      {/* 1st HEADER */}

      <header className="bg-primary text-2xl text-white">
        <nav className="container py-3 flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex gap-4 items-center">
            <MdEmail />
            <span>123@email.com</span>
            <FaPhoneAlt />
            <span>977777283</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/login">Login</Link>
            <FaUser />
            <AiOutlineShoppingCart />
          </div>
        </nav>
      </header>

      {/* 2nd HEADER */}

      <header className="text-2xl">
        <nav className="py-5 flex flex-col lg:flex-row items-center container lg:gap-28 gap-5">
          <h1 className="font-bold text-5xl text-primary">Hekto</h1>
          <div className="flex flex-col lg:flex-row grow justify-between items-center gap-3">
            <ul className="flex gap-10">
              <li>
                <Link
                  to="/"
                  className={`${
                    pathname == "/" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`${
                    pathname == "/products" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="#">Cart</Link>
              </li>
            </ul>
            <form className="flex">
              <input className="border-2 border-r-0" />
              <button className="border-2  bg-secondary text-white p-3">
                <CiSearch />
              </button>
            </form>
          </div>
        </nav>
    
      </header>

     
    </>
  );
}
