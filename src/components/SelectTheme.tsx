import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

const SelectTheme = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [currValue, setCurrValue] = useState(theme);

  const setResolvedTheme = (resolvedTheme: string) => {
    setTheme(resolvedTheme);
    setCurrValue(resolvedTheme);
  };

  const themes: { value: string; icon: ReactElement }[] = [
    { value: "system", icon: <Monitor size={15} /> },
    { value: "dark", icon: <Moon size={15} /> },
    { value: "light", icon: <Sun size={15} /> },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger
        className={clsx(
          "flex h-8 items-center gap-1 px-2 text-sm font-medium",
          "rounded-lg border border-slate-7 bg-slate-3 shadow",
          "hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-productive-standard"
        )}
      >
        {themes.find((theme) => theme.value === currValue)?.icon}
        {<ChevronDown size={15} />}
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              asChild
              sideOffset={6}
              align="end"
              className="z-30"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <DropdownMenu.RadioGroup
                  value={currValue}
                  onValueChange={setResolvedTheme}
                  className="divide-y divide-slate-6 rounded-lg border border-slate-7 bg-slate-3 shadow"
                >
                  {themes.map(({ value, icon }) => (
                    <DropdownMenu.RadioItem
                      key={value}
                      value={value}
                      className={clsx(
                        "group relative flex h-8 w-24 items-center justify-between gap-1 px-2 text-sm font-medium",
                        "select-none hover:bg-slate-6",
                        "motion-safe:duration-300 motion-safe:ease-productive-standard"
                      )}
                    >
                      <div className="flex items-center gap-1 group-active:scale-90  motion-safe:duration-75 motion-safe:ease-productive-standard">
                        {icon}
                        {value[0]?.toUpperCase() + value.substring(1)}
                      </div>

                      <DropdownMenu.ItemIndicator>
                        <Check size={14} />
                      </DropdownMenu.ItemIndicator>
                    </DropdownMenu.RadioItem>
                  ))}
                </DropdownMenu.RadioGroup>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default SelectTheme;
