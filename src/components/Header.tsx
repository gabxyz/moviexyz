import clsx from "clsx";
import Link from "next/link";

import AboutModal from "@/components/AboutModal";
import SettingsModal from "@/components/SettingsModal";

const Header = () => {
  return (
    <header className="w-screen self-center border-b border-mauve-6 bg-mauve-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link
          href="/"
          className={clsx(
            "w-fit select-none text-xl font-bold leading-tight md:text-2xl",
            "bg-gradient-to-r from-purple-11 to-indigo-11 bg-clip-text text-transparent",
            "hover:opacity-80 motion-safe:duration-200 motion-safe:ease-productive-standard"
          )}
        >
          moviexyz
        </Link>
        <div className="flex items-center gap-4">
          <AboutModal />
          <SettingsModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
