import Link from "next/link";
import clsx from "clsx";
import AboutModal from "@/components/AboutModal";
import SettingsModal from "@/components/SettingsModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between gap-6 rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md">
      <div className="flex flex-col">
        <Link
          href="/"
          className={clsx(
            "w-fit text-lg font-bold leading-snug md:text-xl",
            "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent",
            "hover:opacity-80 motion-safe:duration-300 motion-safe:ease-productive-standard"
          )}
        >
          Moviexyz
        </Link>
        <p className="text-sm font-medium text-slate-11">
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
