import React from "react";
import { CLIENT_LOGOS } from "../../data";

const Clients = () => {
  return (
    <div className="mb-28 mt-12 h-full w-full">
      <h2 className="text-center text-5xl md:text-7xl">They Trust Us</h2>
      <div className="grid h-full place-content-start place-items-center px-10">
        <div className="grid h-full grid-cols-4 gap-4 md:grid-cols-6">
          {CLIENT_LOGOS.map((image, index) => (
            <img
              key={index}
              className="aspect-square w-full object-cover"
              src={image.image}
              alt={image.image_alt}
            />
          ))}
          <div className="flex h-full w-full items-center justify-center">
            <h5 className="text-base font-semibold md:text-lg lg:text-xl">
              And many more...
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
