import SettingsModal from "./SettingsModal";

const Header = () => {
  return (
    <header className="flex items-start justify-between rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">movie explorer</h1>
        <p className="text-slate-11">explore and discover random movies</p>
      </div>
      <SettingsModal />
    </header>
  );
};

export default Header;
