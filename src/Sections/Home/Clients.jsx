import React from "react";
import { CLIENT_LOGOS } from "../../data";

const Clients = () => {
  return (
    <section className="font-poppins min-h-screen pt-12 font-semibold">
      <div className="md:max-w-8xl mx-auto h-full md:px-10">
        <h2 className="my-12 pb-8 text-center text-5xl md:text-7xl">
          They Trust Us
        </h2>
        <div className="mx-auto grid h-full place-content-start place-items-center px-10 md:max-w-7xl">
          <div className="grid h-full grid-cols-4 gap-x-32 md:grid-cols-4">
            {CLIENT_LOGOS.map((image, index) => (
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
    </section>
  );
};

export default Clients;
