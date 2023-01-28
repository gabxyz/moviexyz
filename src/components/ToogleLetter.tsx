import clsx from "clsx";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import useLetterCaseState from "@/hooks/useLetterCaseState";

const ToggleLetter = () => {
  const { letterCase, setLetterCase } = useLetterCaseState();

  const toggleClass = clsx(
    "flex items-center h-7 px-2.5",
    "bg-slate-3 rounded-lg",
    "hover:bg-slate-4 rdx-state-on:bg-slate-5 rdx-state-on:text-slate-12",
    "motion-safe:duration-300 motion-safe:ease-productive-standard"
  );

  return (
    <ToggleGroup.Root
      type="single"
      aria-label="Letter case"
      value={letterCase}
      onValueChange={(letterCase) => {
        if (letterCase) setLetterCase(letterCase);
      }}
      className={clsx(
        "mt-4 flex",
        "divide-x divide-slate-6 rounded-lg border border-slate-7 bg-slate-3 text-slate-11 shadow",
        "hover:border-slate-8 motion-safe:duration-300 motion-safe:ease-productive-standard"
      )}
    >
      <ToggleGroup.Item
        value="lowercase"
        aria-label="lowercase text"
        className={clsx(toggleClass, "rounded-r-none")}
      >
        <span className="text-xs font-semibold">aa</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="none"
        aria-label="capitalized text"
        className={clsx(toggleClass, "rounded-l-none")}
      >
        <span className="text-xs font-semibold capitalize">Aa</span>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ToggleLetter;
