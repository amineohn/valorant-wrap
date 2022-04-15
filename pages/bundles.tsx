import fetcher from "libs/fetcher";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Bundles } from "../libs/types";
import useSWR from "swr";
import Navigation from "components/navigation";
const Home: NextPage = () => {
  const { data } = useSWR<Bundles>("/api/bundles", fetcher);
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center py-4 px-4 sm:px-0 mx-auto my-auto overflow-auto">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4">
            {data?.data.map((agent, index) => (
              <>
                <div
                  key={index}
                  className="relative inline-flex px-6 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                >
                  <span className="w-full h-full bg-slate-800 absolute left-0 -translate-x-full ease-out duration-500 transition-all mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="inline-flex space-x-5 items-center relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <div>
                      <img src={agent.displayIcon} className="w-full h-full" />
                    </div>
                    <div className="px-4 py-2 items-center text-gray-50 ">
                      <h1 className="text-xl font-bold">{agent.displayName}</h1>
                      <p className="text-sm">{agent.description}</p>
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
