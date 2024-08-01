import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
import { useState, useEffect } from 'react';

const CarouselItem = (props) => {
  return (
    <>
      <div
        className={`${props.banner} h-[75vh] bg-no-repeat bg-cover flex items-center text-left`}
      >
        <div className="container">
          <div className="xl:w-2/3 -mt-28">
            <p className="mb-5 text-3xl text-secondary">
              Best Furniture For Your Castle....
            </p>
            <p className="text-7xl bold font-bold mb-5">
              New Furniture Collection Trends in 2020
            </p>
            <p className="text-3xl text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((response) => {
        setProducts(response.data.data);
      })
  }, []);

  return (
    <>
      <section>
        <Carousel emulateTouch={true} showStatus={false}>
          <CarouselItem banner="bg-banner-1" />
          <CarouselItem banner="bg-banner-2" />
        </Carousel>
      </section>
      <div className="container">
        <section className="container grid grid-cols-4 mt-40 gap-4 mb-10">
          {
            products.map((product) => {
            return <SingleProduct/>
            }
            )
}
        </section>
        <p className="text-5xl font-bold text-center mb-14">Latest Products</p>
        <section className="grid grid-cols-3 gap-4">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </section>
      </div>
    </>
  );
}
