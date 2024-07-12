import React from "react";
import Card from "../../Components/Work/Cards";
import { PROJECT_IMAGES } from "../../data";

const Works = () => {
  return (
    <div className="mb-4 h-full w-full font-poppins font-semibold">
      <h2 className="my-12 text-center text-5xl md:text-7xl">We Create</h2>
      <div className="grid h-full place-items-center px-10">
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
          {PROJECT_IMAGES.map((image, index) => (
            <Card key={index} image={image} className={"aspect-video w-full"} />
          ))}
          <div className="flex h-full w-full items-center justify-center">
            <h4 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              And many more...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
