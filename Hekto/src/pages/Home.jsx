// Home.js
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
import CarouselItem from "../components/CarouselItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home({user}) {
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        setProducts(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        // console.log();

        setLatestProducts(res.data.products);
      });
  }, []);

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
          {products.length === 0 && (
            <>
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
            </>
          )}
          {products.map((product) => {
            return <SingleProduct product={product} />;
          })}
        </section>
        <p className="text-5xl font-bold text-center mb-14">Latest Products</p>
        <section className="grid grid-cols-3 gap-4">
          {products.length === 0 && (
            <>
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
              <Skeleton height={458} />
            </>
          )}
          {latestProducts.map((product) => {
            // console.log(product);
            
            return <SingleProduct product={product} user={user} type={"latest"}/>;
          })}
        </section>
      </div>
    </>
  );
}
