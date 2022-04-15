import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="py-6 px-6 flex items-center justify-between bg-neutral-900 sticky top-0 z-50">
      <div className="inline-flex space-x-2 items-center">
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
              router.asPath === "/"
                ? "bg-neutral-50/10"
                : "hover:bg-neutral-50/10"
            } px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer`}
          >
            Agents
          </a>

          <div
            className={`w-full h-1 ${
              router.asPath === "/"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } mt-4 rounded-lg absolute`}
          />
        </div>
        <div className="relative group">
          <a
            onClick={() => router.push("/bundles")}
            className="text-neutral-100 hover:bg-neutral-50/10 px-4 py-2 rounded-md font-semibold text-md uppercase cursor-pointer"
          >
            Bundles
          </a>
          <div
            className={`w-full h-1 ${
              router.asPath === "/bundles"
                ? "bg-[#FD4556]"
                : "group-hover:bg-[#FD4556]"
            } group-hover:bg-[#FD4556] mt-4 rounded-lg absolute`}
          />
        </div>
      </div>
      <div className="text-white">lorl</div>
    </nav>
  );
};
export default Navigation;
