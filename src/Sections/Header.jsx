import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const routes = {
  Services: "/services",
  Projects: "/projects",
  "About Us": "/aboutus",
  "Contact Us": "/contact",
};

export default function Example() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="fixed z-20 min-w-full justify-end text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div className="justify-end">
          <Menu.Button
            className="z-50 inline-flex w-full justify-center px-8 py-4 font-poppins text-xl font-medium text-white focus:outline-none"
            whileHover={{
              scale: 1.25,
            }}
          >
            MENU
            {/* <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 h-screen w-screen origin-top-right bg-black px-40 py-40 font-poppins font-medium shadow-lg focus:outline-none">
            <div className="px-1 py-1">
              {["Services", "Projects", "About Us", "Contact Us"].map(
                (item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        to={routes[item]}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`${
                          active ? "bg-slate-900 text-white" : "text-white"
                        } hover-move-right group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors duration-500`}
                      >
                        {active ? (
                          <div className="flex">
                            <Icon item={item} active={true} />
                            <span className="text-7xl">{item}</span>
                          </div>
                        ) : (
                          <div className="flex">
                            <Icon item={item} active={false} />
                            <span
                              className={`${hoveredItem && hoveredItem !== item ? "gradient-mask" : ""} text-7xl`}
                            >
                              {item}
                            </span>
                          </div>
                        )}
                      </Link>
                    )}
                  </Menu.Item>
                ),
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function Icon({ item, active }) {
  switch (item) {
    case "Services":
      return active ? (
        <DuplicateActiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      ) : (
        <DuplicateInactiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      );
    case "Projects":
      return active ? (
        <EditActiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      ) : (
        <EditInactiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      );
    case "About Us":
      return active ? (
        <MoveActiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      ) : (
        <MoveInactiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      );
    case "Contact Us":
      return active ? (
        <ArchiveActiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      ) : (
        <ArchiveInactiveIcon className="mr-2 h-20 w-20" aria-hidden="true" />
      );
    default:
      return null;
  }
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        // fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        // fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        // fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        // fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        // fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        // fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        // fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        // fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        // fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        // fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      // fill="#8B5CF6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
