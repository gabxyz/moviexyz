import { IconSettings, IconX } from "@tabler/icons-react";

import GenresToggle from "@/components/GenresToggle";
import Modal from "@/components/Modal";
import SelectTheme from "@/components/SelectTheme";
import ToggleLetter from "@/components/ToogleLetter";

const SettingsModal = () => {
  return (
    <Modal
      triggerIcon={<IconSettings size={20} />}
      closeIcon={<IconX size={18} />}
      title="Settings"
      description="Adjust website settings to your preferences"
    >
      <div className="my-2 divide-y divide-mauve-6">
        <div className="flex items-end justify-between gap-2 pb-4">
          <div className="flex flex-col pt-4">
            <h3 className="font-semibold">Theme</h3>
            <p className="text-sm text-mauve-11">
              Select you preferred color theme
            </p>
          </div>
          <SelectTheme />
        </div>
        <div className="flex items-end justify-between gap-2 py-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">Letter case</h3>
            <p className="text-sm text-mauve-11">
              Choose between normal, capitalized text or all lowercase text
            </p>
          </div>
          <ToggleLetter />
        </div>
        <div className="flex flex-col justify-between py-4">
          <h3 className="font-semibold">Genres</h3>
          <p className="mb-4 text-sm text-mauve-11">
            Select your favorite movie genres
          </p>
          <GenresToggle />
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
