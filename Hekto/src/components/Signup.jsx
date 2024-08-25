import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        'name':e.target.name.value,
        'email':e.target.email.value,
        'password':e.target.password.value,
        'role':e.target.role.value,
      })
      .then((res) => {
        toast.success("LoGIN Sucessfull");
        navigate("/");
      })
      .catch((err) => {
        // console.log();
      });
  };
  return (
    <>
      <div className="flex justify-center items-center container h-screen">
        <form
          onSubmit={handleSubmit}
          className="h-3/4 w-2/5 flex j items-center flex-col  -mt-60 bg-white shadow-2xl p-7 gap-5"
        >
          <h2 className="font-bold text-4xl">Login</h2>
          <p className="text-2xl text-gray-400 -mt-3 mb-5">
            Please according to below details!
          </p>

          <div className="flex items-center flex-col w-96 gap-6 ">
            <input
              type="text"
              className="border border-gray-400 mx-auto w-full h-11"
              name="name"
              placeholder="name"
            />

            <input
              type="text"
              className="border border-gray-400 w-full h-11"
              name="email"
              placeholder="email"
            />

            <input
              type="text"
              className="border border-gray-400 w-full h-11"
              name="password"
              placeholder="password"
            />

            <input
              type="text"
              className="border border-gray-400 w-full h-11"
              name="role"
              placeholder="role"
            />

            <p className="flex justify-start items-start w-full">
              Forgot your password
            </p>

            <button className="w-full bg-secondary h-11 text-white">
              Sign In
            </button>
            <p className="">
              Dont have an account?<Link to="/signup">Create account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
