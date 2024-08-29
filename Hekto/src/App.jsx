import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import{ useState} from "react";

export default function App() {
  const [user, setUser] = useState([])
  return (
    <>
      <Header user={user}/>
    
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
}
