import SettingsModal from "@/components/SettingsModal";
import AboutModal from "@/components/AboutModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold leading-snug">Movie Explorer</h1>
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
