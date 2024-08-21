// Home.js
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
import CarouselItem from "../components/CarouselItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {


  return (
    <>
      <section>
        <Carousel emulateTouch={true} showStatus={false} showThumbs={false}>
          <CarouselItem banner="bg-banner-1" />
          <CarouselItem banner="bg-banner-2" />
        </Carousel>
      </section>
      <div className="container">
        <section className="container grid grid-cols-4 mt-40 gap-4 mb-10">
          {/* {products.length === 0 && (
            <>
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
            </>
          )} */}
         <SingleProduct/>
         <SingleProduct/>
         <SingleProduct/>
         <SingleProduct/>
        </section>
        <p className="text-5xl font-bold text-center mb-14">Latest Products</p>
        <section className="grid grid-cols-3 gap-4">
        <SingleProduct type="latest"/>
        <SingleProduct type="latest"/>
        <SingleProduct type="latest"/>
        </section>
      </div>
    </>
  );
}
