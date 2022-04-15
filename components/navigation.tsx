import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "utils/classes";

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 bg-neutral-900">
      <div className="inline-flex items-center space-x-2">
        <div className="pr-3">
          <button onClick={() => router.push("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white hover:animate-spin transition-all ease-linear duration-200 hover:text-[#FD4556]"
              fill="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/agents")}
            className={`text-neutral-100 ${
              router.asPath === "/agents"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Agents
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/agents"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/maps")}
            className={`text-neutral-100 ${
              router.asPath === "/"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Maps
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/maps"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/events")}
            className={`text-neutral-100 ${
              router.asPath === "/events"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Events
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/events"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/bundles")}
            className={`text-neutral-100 ${
              router.asPath === "/bundles"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Bundles
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/bundles"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/seasons")}
            className={`text-neutral-100 ${
              router.asPath === "/seasons"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Seasons
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/seasons"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
      </div>
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-md bg-neutral-800 focus:outline-none">
              Yoow
              <ChevronDownIcon
                className={`-mr-1 ml-2 h-5 w-5 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right border-4 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none border-t-red-500 border-l-transparent border-r-transparent border-b-transparent">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-neutral-50/10 text-white px-1 py-2 rounded-lg transition-all ease-in-out"
                          : "text-white transition-all ease-in-out",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-neutral-50/10 text-white px-1 py-2 rounded-lg transition-all ease-in-out"
                          : "text-white transition-all ease-in-out",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-neutral-50/10 text-white px-1 py-2 rounded-lg transition-all ease-in-out"
                          : "text-white transition-all ease-in-out",
                        "block px-4 py-2 text-sm",
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};
export default Navigation;
