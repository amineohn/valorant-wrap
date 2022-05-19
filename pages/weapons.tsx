import fetcher from "libs/fetcher";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Weapons } from "../libs/types";
import useSWR from "swr";
import Navigation from "components/navigation";
import Loading from "components/loading";
const Home: NextPage = () => {
  const { data } = useSWR<Weapons>("/api/weapons", fetcher);
  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center px-4 py-4 mx-auto my-auto overflow-auto sm:px-0 slide-in-fwd-top">
        <div className="container">
          <div className="flex items-center justify-center m-auto">
            {!data && <Loading />}
          </div>
          <div className="grid items-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data?.data.map((bundle) => (
              <>
                <div
                  key={bundle.uuid}
                  className="relative flex flex-col pb-2 overflow-hidden font-medium transition-all bg-[#FD4556] group"
                >
                  <span className="absolute left-0 w-full h-full transition-all duration-500 ease-out -translate-x-full bg-slate-800 mb-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <div className="relative flex flex-col items-center w-full space-y-2 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    <div>
                      <img src={bundle.displayIcon} className="w-full h-full" />
                    </div>
                    <div className="items-center px-4 py-2 text-gray-50 ">
                      <h1 className="text-xl font-bold">
                        {bundle.displayName}
                      </h1>
                      <p className="text-sm">{bundle.weaponStats}</p>
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
