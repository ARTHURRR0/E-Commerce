import React from 'react'

let CarouselItem = (props) => {
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

  export default CarouselItem;
