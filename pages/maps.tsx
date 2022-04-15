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
  const [openSplit, setOpenSplit] = useState(false);
  const [openBind, setOpenBind] = useState(false);
  const [openBreeze, setOpenBreeze] = useState(false);
  const [openFracture, setOpenFracture] = useState(false);
  const [openIcebox, setOpenIcebox] = useState(false);
  const [openRange, setOpenRange] = useState(false);
  const [openHaven, setOpenHaven] = useState(false);
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center px-4 py-4 mx-auto my-auto overflow-auto sm:px-0">
        <div className="container">
          <div className="flex items-center justify-center m-auto">
            {!data && <Loading />}
          </div>
          <div className="grid items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data?.data.map((map) => (
              <>
                {map.displayName === "Ascent" && (
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
                              {map.displayName}
                            </Dialog.Title>
                            <div className="mt-2">
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
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
                )}
                {map.displayName === "Fracture" && (
                  <Transition show={openFracture} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenFracture(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenFracture(false)}
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
                )}
                {map.displayName === "Split" && (
                  <Transition show={openSplit} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenSplit(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenSplit(false)}
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
                )}
                {map.displayName === "Bind" && (
                  <Transition show={openBind} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenBind(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenBind(false)}
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
                )}
                {map.displayName === "Breeze" && (
                  <Transition show={openBreeze} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenBreeze(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenBreeze(false)}
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
                )}
                {map.displayName === "Icebox" && (
                  <Transition show={openIcebox} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenIcebox(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenIcebox(false)}
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
                )}
                {map.displayName === "The Range" && (
                  <Transition show={openRange} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenRange(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenRange(false)}
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
                )}
                {map.displayName === "Haven" && (
                  <Transition show={openHaven} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={() => setOpenHaven(false)}
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
                              <div className="flex flex-col">
                                <p className="text-sm text-gray-500 ">
                                  Coordinates: {map.coordinates}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier X:{map.xMultiplier}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  Multiplier Y:{map.yMultiplier}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                onClick={() => setOpenHaven(false)}
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
                )}
                <div
                  key={map.uuid}
                  className="relative flex flex-col pb-2 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                >
                  <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out -translate-x-full bg-slate-800 mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="relative flex flex-col items-center w-full space-y-2 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <div>
                      <img src={map.splash} className="w-full h-full" />
                      <img src={map.displayIcon} className="w-full h-full" />
                    </div>
                    <div className="items-center px-4 py-2 text-gray-50">
                      <h1 className="text-xl font-bold">{map.displayName}</h1>
                      <p className="text-sm">{map.coordinates}</p>
                    </div>
                    {map.displayName === "Ascent" && (
                      <button
                        onClick={() => setOpen(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Split" && (
                      <button
                        onClick={() => setOpenSplit(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Fracture" && (
                      <button
                        onClick={() => setOpenFracture(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Bind" && (
                      <button
                        onClick={() => setOpenBind(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Breeze" && (
                      <button
                        onClick={() => setOpenBreeze(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Icebox" && (
                      <button
                        onClick={() => setOpenIcebox(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "The Range" && (
                      <button
                        onClick={() => setOpenRange(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
                    {map.displayName === "Haven" && (
                      <button
                        onClick={() => setOpenHaven(true)}
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-800 group focus:outline-none"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FD4556] shadow absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white">
                          details
                        </span>
                      </button>
                    )}
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
