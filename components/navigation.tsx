import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "utils/classes";
import useSWR from "swr";
import { Version } from "libs/types";
import fetcher from "libs/fetcher";

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data } = useSWR<Version>("api/version", fetcher);
  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {data?.branch}
                </Dialog.Title>
                <div className="mt-2">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">{data?.manifestId}</p>
                    <p className="text-sm text-gray-500">{data?.status}</p>
                    <p className="text-sm text-gray-500">
                      {data?.riotClientVersion}
                    </p>
                    <p className="text-sm text-gray-500">{data?.version}</p>
                    <p className="text-sm text-gray-500">{data?.buildDate}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#FD4556] group focus:outline-none"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-slate-800 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Close
                    </span>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-neutral-900">
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
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white uppercase border border-transparent rounded-md focus:outline-none">
                Weapons
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
                        onClick={() => router.push("/bundles")}
                        className={classNames(
                          active
                            ? "bg-neutral-50/10 text-white px-1 py-2 rounded-lg transition-all ease-in-out"
                            : "text-white transition-all ease-in-out",
                          "block px-4 py-2 text-sm relative cursor-pointer",
                        )}
                      >
                        Package Bundles
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => router.push("/weapons")}
                        className={classNames(
                          active
                            ? "bg-neutral-50/10 text-white px-1 py-2 rounded-lg transition-all ease-in-out"
                            : "text-white transition-all ease-in-out",
                          "block px-4 py-2 text-sm relative cursor-pointer",
                        )}
                      >
                        Weapons
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="">
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
              Information release
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
