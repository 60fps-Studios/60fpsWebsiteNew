import React from "react";
import { ClientLogos } from "../../data";

const Clients = () => {
  return (
    <div className="mb-4 h-full w-full">
      <h2 className="my-12 text-center text-5xl md:text-7xl">They Trust Us</h2>
      <div className="grid h-full place-content-start place-items-center px-10">
        <div className="grid h-full grid-cols-4 gap-4 md:grid-cols-9">
          {ClientLogos.map((image, index) => (
            <img
              key={index}
              className="aspect-square w-full object-cover"
              src={image.image}
              alt={image.image_alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
