import cx from "classnames";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import {
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
} from "@radix-ui/react-icons";

const ToggleLetter = () => {
  const { letterCase, setLetterCase } = useLetterCaseState();

  const toggleClass =
    "h-7 px-2.5 bg-slate-3 hover:bg-slate-4 rdx-state-on:bg-slate-5 rdx-state-on:text-slate-12 rounded-lg motion-safe:duration-300 motion-safe:ease-expressive-standard";

  return (
    <ToggleGroup.Root
      type="single"
      aria-label="Letter case"
      value={letterCase}
      onValueChange={(letterCase) => {
        if (letterCase) setLetterCase(letterCase);
      }}
      className="mt-4 flex divide-x divide-slate-6 rounded-lg border border-slate-7 bg-slate-3 text-slate-11 drop-shadow hover:border-slate-8 motion-safe:duration-300 motion-safe:ease-expressive-standard"
    >
      <ToggleGroup.Item
        value="lowercase"
        aria-label="lowercase text"
        className={cx(toggleClass, "rounded-r-none")}
      >
        <LetterCaseLowercaseIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="none"
        aria-label="capitalized text"
        className={cx(toggleClass, "rounded-l-none")}
      >
        <LetterCaseCapitalizeIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ToggleLetter;
