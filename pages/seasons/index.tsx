import fetcher from "libs/fetcher";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Seasons, SeasonsCompetitive } from "../../libs/types";
import useSWR from "swr";
import Navigation from "components/navigation";
import Loading from "components/loading";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "utils/classes";

const Home: NextPage = () => {
  const { data } = useSWR<Seasons>("/api/seasons", fetcher);
  const { data: selectedtwo } = useSWR<SeasonsCompetitive>(
    "/api/seasons/competitive",
    fetcher,
  );
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);

  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center px-4 py-4 mx-auto my-auto overflow-auto sm:px-0">
        <div className="container">
          <div className="flex items-center justify-end m-auto">
            <Menu as="div" className="relative inline-block py-4 text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full shadow-sm px-4 py-2 bg-[#FD4556] text-sm font-semibold uppercase text-white focus:outline-none">
                  Filter
                  <ChevronDownIcon
                    className="w-5 h-5 ml-2 -mr-1"
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
                <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white border-4 rounded-md shadow-lg border-t-red-500 border-l-transparent border-r-transparent border-b-transparent focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => setSelected(!selected)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer",
                          )}
                        >
                          {selected ? "Show Season" : "Hide Season"}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => setSelected2(!selected2)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer",
                          )}
                        >
                          {selected2 ? "Show Competitive" : "Hide Competitive"}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {!data && <Loading />}
          </div>
          <div className="grid items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {!selected &&
              data?.data?.map((tiers, index) => (
                <>
                  <div
                    key={index}
                    className="relative inline-flex px-6 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                  >
                    <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out -translate-x-full bg-slate-800 mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <div className="relative inline-flex items-center w-full space-x-5 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      <div className="items-center px-4 py-2 text-gray-50 ">
                        <h1 className="text-xl font-bold">
                          {tiers.displayName}
                        </h1>
                        <p className="text-sm">{tiers.type}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            {!selected2 &&
              selectedtwo?.data?.[0].borders.map((tiers, index) => (
                <>
                  <div
                    key={index}
                    className="relative inline-flex px-6 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                  >
                    <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out -translate-x-full bg-slate-800 mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
                      <div>
                        <img
                          src={tiers.displayIcon}
                          className="z-50 w-40 h-40"
                        />
                      </div>
                    </span>
                    <div>
                      <img src={tiers.displayIcon} className="z-50 w-56 h-40" />
                    </div>
                    <div className="relative inline-flex items-center w-full space-x-5 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      <div className="flex flex-col items-center px-4 py-2 text-gray-50 ">
                        <div className="flex flex-col items-center">
                          {tiers.winsRequired && (
                            <>
                              <div className="inline-flex items-center space-x-3">
                                <svg
                                  id="Layer_1"
                                  data-name="Layer 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-8 h-8 text-white"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M500.79,79.32A45.29,45.29,0,0,0,466.8,64H423.56q.24-9.54.26-19.2v-.46C423.8,19.77,403.38,0,378.6,0H133.4C108.62,0,88.2,19.77,88.18,44.34v.46q0,9.67.26,19.2H45.2A45,45,0,0,0,.41,115.06c13.06,95.32,74.27,174.53,157.16,214.77,17.3,26.34,37.09,45.9,58.49,56.86a99.3,99.3,0,0,1-2,10.11,102.64,102.64,0,0,1-57.7,67.78c-.06.06-.13.13-.19.06a24.64,24.64,0,0,0,2,45.89,24,24,0,0,0,8.33,1.47H345.4a24.81,24.81,0,0,0,11.94-46.66c-.77-.38-1.55-.7-2.32-1.09A102.57,102.57,0,0,1,298,396.8a99.27,99.27,0,0,1-2-10.11c21.41-11,41.19-30.53,58.49-56.86,82.89-40.24,144.1-119.45,157.16-214.77A44.85,44.85,0,0,0,500.79,79.32ZM26,111.61a19.38,19.38,0,0,1,4.66-15.45A19.14,19.14,0,0,1,45.2,89.6H89.58c4.59,75.74,20.64,143.94,44.41,196.75C76.69,246.53,36,184.24,26,111.61ZM316.32,165l-14.79,14.86a14.66,14.66,0,0,0-4,12.73l3.49,21c2,11.75-10,20.71-20.24,15.16l-18.28-9.91a13.58,13.58,0,0,0-13,0l-18.28,9.91C221,234.26,209,225.3,211,213.55l3.49-21a14.66,14.66,0,0,0-4-12.73L195.68,165c-8.28-8.32-3.71-22.82,7.73-24.53l20.44-3.06a14,14,0,0,0,10.5-7.87l9.14-19.09a13.77,13.77,0,0,1,25,0l9.14,19.09a14,14,0,0,0,10.5,7.87l20.44,3.06C320,142.16,324.6,156.65,316.32,165ZM486,111.61c-10,72.63-50.69,134.93-108,174.74,23.77-52.81,39.82-121,44.41-196.75H466.8a19.14,19.14,0,0,1,14.55,6.56A19.38,19.38,0,0,1,486,111.61Z"
                                  />
                                </svg>
                                <p className="font-semibold">
                                  {tiers.winsRequired}
                                </p>
                              </div>
                            </>
                          )}
                        </div>

                        {selectedtwo?.data.map((tiers, index) => (
                          <>{tiers.displayName}</>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
