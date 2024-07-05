import React from "react";
import RevealCard from "../../Components/Services/RevealCards";
import { ServicesDetails } from "../../data";

const Services = () => {
  return (
    <div className="h-full w-full">
      <h2 className="my-12 text-center text-5xl md:text-7xl">Services</h2>
      <div className="grid h-full place-items-center px-10">
        <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ServicesDetails.map((image, index) => (
            <RevealCard
              key={index}
              image={image}
              className={"aspect-square w-full"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
