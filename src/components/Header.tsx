import SettingsModal from "@/components/SettingsModal";
import AboutModal from "@/components/AboutModal";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-start justify-between rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md">
      <div className="flex flex-col">
        <Link
          href="/"
          className="w-fit bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-lg font-bold leading-snug text-transparent hover:opacity-80 motion-safe:duration-300 motion-safe:ease-expressive-standard"
        >
          Movie Explorer
        </Link>
        <p className="text-sm text-slate-11">
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
