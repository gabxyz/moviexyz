import clsx from "clsx";
import Link from "next/link";

import AboutModal from "@/components/AboutModal";
import SettingsModal from "@/components/SettingsModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between gap-6 rounded-xl border border-slate-6 bg-slate-2 px-2.5 py-2 shadow-md md:px-6 md:py-4">
      <div className="-mt-1 flex flex-col">
        <Link
          href="/"
          className={clsx(
            "w-fit text-xl font-bold",
            "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent",
            "hover:opacity-80 motion-safe:duration-200 motion-safe:ease-productive-standard"
          )}
        >
          Moviexyz
        </Link>
        <p className="-mt-1 text-sm text-slate-11">
          Explore and discover random movies
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <AboutModal />
        <SettingsModal />
      </div>
    </header>
  );
};

export default Header;
