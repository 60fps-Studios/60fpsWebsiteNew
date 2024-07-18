import React from "react";
import Meteors from "../Components/Footer/Meteors";

const Footer = () => {
  return (
    <footer className="relative h-screen font-poppins">
      {/* Bg */}
      <div className="absolute inset-0 -z-10 bg-black" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 h-full justify-center overflow-hidden bg-black"
        aria-hidden="true"
      >
        <Meteors number={30} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-none">
        {/* Blocks */}
        <div className="grid gap-8 py-8 sm:grid-cols-12 lg:ml-72 lg:grid-cols-10">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <div className="">
              <h1
                className="font-cabinet-grotesk text-6xl font-bold text-white lg:-ml-60 lg:pt-12"
                data-aos="fade-up"
              >
                Prim*
              </h1>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4 lg:mt-40">
            <h6 className="mb-3 text-3xl font-bold uppercase text-gray-100">
              Essentials
            </h6>
            <ul className="space-y-2 text-2xl">
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Budgeting and analytics
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Open banking
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Pockets
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4 lg:mt-40">
            <h6 className="mb-3 text-3xl font-bold uppercase text-gray-100">
              Company
            </h6>
            <ul className="space-y-2 text-2xl">
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4 lg:col-start-3">
            <h6 className="mb-3 text-3xl font-bold uppercase text-gray-100">
              Lifestyle
            </h6>
            <ul className="space-y-2 text-2xl">
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  International products
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Product method
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="mb-3 text-3xl font-bold uppercase text-gray-100">
              Resources
            </h6>
            <ul className="space-y-2 text-2xl">
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  DPA
                </a>
              </li>
              <li>
                <a
                  className="duration-150 text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:items-center md:justify-between md:pb-8 lg:mb-20">
          <div className="lg:-mt-40">
            {/* Social links */}
            <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
              <li>
                <a
                  className="duration-150 flex items-center justify-center text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-20 w-20 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-2">
                <a
                  className="duration-150 flex items-center justify-center text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="h-20 w-20 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-2">
                <a
                  className="duration-150 flex items-center justify-center text-gray-400 transition ease-in-out hover:text-white"
                  href="#0"
                  aria-label="Telegram"
                >
                  <svg
                    className="h-20 w-20 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Copyrights */}
          <div className="text-2xl text-gray-400 lg:ml-8">
            © vebcraft.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
