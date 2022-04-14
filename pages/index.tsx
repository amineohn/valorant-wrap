import type { NextPage } from "next";
import React from "react";
const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-tl from-orange-500 to-purple-500 font-bold text-xl md:text-4xl px-4 md:px-0">
        Hello Next.js, TypeScript, and Tailwind! 😃
      </h1>
    </div>
  );
};

export default Home;
