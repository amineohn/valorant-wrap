import fetcher from "libs/fetcher";
import type { NextPage } from "next";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Maps } from "../libs/types";
import useSWR from "swr";
import Navigation from "components/navigation";
import Loading from "components/loading";
const Home: NextPage = () => {
  const { data } = useSWR<Maps>("/api/maps", fetcher);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center py-4 px-4 sm:px-0 mx-auto my-auto overflow-auto">
        <div className="container">
          <div className="flex items-center justify-center m-auto">
            {!data && <Loading />}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4">
            {data?.data.map((map, index) => (
              <>
                {() => {
                  switch (map.displayName) {
                    case "Ascent":
                      return (
                        <Transition appear show={open} as={Fragment}>
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
                                    {map.displayName}
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                      {map.coordinates}
                                    </p>
                                  </div>

                                  <div className="mt-4">
                                    <button
                                      onClick={() => setOpen(false)}
                                      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#FD4556] group"
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
                      );
                  }
                }}
                <div
                  key={index}
                  onClick={() => setOpen(true)}
                  className="relative flex flex-col pb-2 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                >
                  <span className="w-full h-full bg-slate-800 absolute left-0 -translate-x-full ease-out duration-500 transition-all mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="flex flex-col space-y-2 items-center relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <div>
                      <img src={map.splash} className="w-full h-full" />
                      <img src={map.displayIcon} className="w-full h-full" />
                    </div>
                    <div className="px-4 py-2 items-center text-gray-50">
                      <h1 className="text-xl font-bold">{map.displayName}</h1>
                      <p className="text-sm">{map.coordinates}</p>
                      {/* <p className="text-sm">
                        {map.callouts?.map((callout, index) => {
                          return (
                            <p>
                              {callout.location}
                              {callout.regionName}
                            </p>
                          );
                        })}
                      </p> */}
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
