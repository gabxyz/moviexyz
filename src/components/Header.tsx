import clsx from "clsx";
import Link from "next/link";

import AboutModal from "@/components/AboutModal";
import SettingsModal from "@/components/SettingsModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between gap-6 rounded-lg border border-slate-6 bg-slate-3 p-4 shadow md:py-4 md:px-6">
      <div className="-mt-1 flex flex-col">
        <Link
          href="/"
          className={clsx(
            "w-fit text-lg font-bold leading-tight md:text-xl",
            "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent",
            "hover:opacity-80 motion-safe:duration-200 motion-safe:ease-productive-standard"
          )}
        >
          Moviexyz
        </Link>
        <p className="text-[13px] text-slate-11 md:text-[15px]">
          Explore and discover random movies
        </p>
      </div>
      <div className="flex items-center gap-4">
        <AboutModal />
        <SettingsModal />
      </div>
    </header>
  );
};

export default Header;
