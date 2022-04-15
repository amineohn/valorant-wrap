import fetcher from "libs/fetcher";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Events } from "../libs/types";
import useSWR from "swr";
import Navigation from "components/navigation";
import Loading from "components/loading";
const Home: NextPage = () => {
  const { data } = useSWR<Events>("/api/events", fetcher);
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center px-4 py-4 mx-auto my-auto overflow-auto sm:px-0">
        <div className="container">
          <div className="flex items-center justify-center m-auto">
            {!data && <Loading />}
          </div>
          <div className="grid items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data?.data.map((event) => (
              <>
                <div
                  key={event.uuid}
                  className="relative inline-flex px-6 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                >
                  <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out -translate-x-full bg-slate-800 mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="relative inline-flex items-center w-full space-x-5 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <div className="items-center px-4 py-2 text-gray-50 ">
                      <h1 className="text-xl font-bold">{event.displayName}</h1>
                      <p className="text-sm">{event.shortDisplayName}</p>
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
