import { twMerge } from "tailwind-merge";

const RevealCard = ({
  className,
  classNameImage,
  classNameTopBox,
  classNameRightBox,
  image,
  handleNavigation,
}) => {
  return (
    <div
      className={twMerge(
        "group/outer relative flex w-full flex-col font-poppins ring-1 ring-black ring-opacity-0 duration-1000 hover:ring-white hover:ring-opacity-100",
        className,
      )}
    >
      {/* Image Wraper */}
      <div
        className={twMerge(
          "absolute bottom-0 left-0 z-[1] h-full w-full origin-bottom-left bg-black duration-300 ease-in-out group-hover/outer:scale-50",
          classNameImage,
        )}
      >
        <img
          className="h-full w-full object-cover"
          src={image.image_src}
          alt={image.image_alt}
        />
      </div>
      {/* Top Box */}
      <div
        className={twMerge(
          "flex h-1/2 flex-col justify-center gap-2 bg-black p-4 text-white",
          classNameTopBox,
        )}
      >
        <h3 className={twMerge("font-extrabold, text-2xl")}>{image.heading}</h3>
        <p className={twMerge("text-base font-light opacity-70")}>
          {image.text}
        </p>
      </div>
      {/* Bottom Half */}
      <div className="flex h-1/2 justify-end">
        {/* Bottom Right Box */}
        <div
          className={twMerge(
            "group/inner h-full w-1/2 bg-white text-black",
            classNameRightBox,
          )}
        >
          <div
            onClick={handleNavigation}
            className="flex h-full w-full items-center justify-center"
          >
            <p className="group-hover/inner:text-blue-500">More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 font-extrabold group-hover/inner:text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealCard;
