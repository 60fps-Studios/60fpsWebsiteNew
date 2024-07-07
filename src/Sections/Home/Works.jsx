import React from "react";
import Card from "../../Components/Work/Cards";
import { PROJECT_IMAGES } from "../../data";

const Works = () => {
  return (
    <div className="mb-6 h-full w-full">
      <h2 className="my-12 text-center text-5xl md:text-7xl">We Create</h2>
      <div className="grid h-full place-items-center px-10">
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
          {PROJECT_IMAGES.map((image, index) => (
            <Card key={index} image={image} className={"aspect-video w-full"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
