import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";

import useLetterCaseState from "@/hooks/useLetterCaseState";

const ToggleLetter = () => {
  const { letterCase, setLetterCase } = useLetterCaseState();

  const toggleClass = clsx(
    "flex items-center px-2 py-1 text-xs text-mauve-11 font-semibold",
    "border-y first:rounded-l-md first:border-x last:rounded-r-md last:border-r border-mauve-7",
    "hover:bg-mauve-4 hover:border-mauve-8",
    "rdx-state-on:bg-mauve-5 rdx-state-on:text-mauve-12 radix-state-on:border-transparent",
    "motion-safe:duration-200 motion-safe:ease-productive-standard"
  );

  return (
    <ToggleGroup.Root
      type="single"
      aria-label="Letter case"
      value={letterCase}
      onValueChange={(letterCase) => {
        if (letterCase) setLetterCase(letterCase);
      }}
      className={clsx("mt-4 flex")}
    >
      <ToggleGroup.Item
        value="lowercase"
        aria-label="lowercase text"
        className={toggleClass}
      >
        <span>aa</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="none"
        aria-label="capitalized text"
        className={toggleClass}
      >
        <span className="capitalize">Aa</span>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ToggleLetter;
