import clsx from "clsx";
import Link from "next/link";

import AboutModal from "@/components/AboutModal";
import SettingsModal from "@/components/SettingsModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between gap-6 rounded-2xl border border-mauve-6 bg-mauve-3 p-4 shadow md:py-4 md:px-6">
      <div className="-mt-1 flex flex-col">
        <Link
          href="/"
          className={clsx(
            "w-fit text-xl font-bold leading-tight",
            "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent",
            "hover:opacity-80 motion-safe:duration-200 motion-safe:ease-productive-standard"
          )}
        >
          Moviexyz
        </Link>
        <p className="text-[15px] text-mauve-11">
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
