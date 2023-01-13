import { Cross1Icon, GearIcon } from "@radix-ui/react-icons";
import GenresToggle from "@/components/GenresToggle";
import Modal from "@/components/Modal";
import SelectTheme from "@/components/SelectTheme";
import ToggleLetter from "./ToogleLetter";

const SettingsModal = () => {
  return (
    <Modal
      triggerIcon={<GearIcon />}
      closeIcon={<Cross1Icon />}
      title="settings"
      description="select page theme and movie genres"
    >
      <div className="mt-4 divide-y divide-slate-6">
        <div className="flex items-end justify-between pb-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">theme</h3>
            <p className="text-sm text-slate-11">
              select you preferred color theme
            </p>
          </div>
          <SelectTheme />
        </div>
        <div className="flex items-end justify-between py-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">letter case</h3>
            <p className="text-sm text-slate-11">
              choose between lowercase and capitalized text
            </p>
          </div>
          <ToggleLetter />
        </div>
        <div className="flex flex-col justify-between py-4">
          <h3 className="font-semibold">genres</h3>
          <p className="mb-4 text-sm text-slate-11">
            select your favorite movie genres
          </p>
          <GenresToggle />
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
