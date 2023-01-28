import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check, ChevronDown } from "lucide-react";
import * as Select from "@radix-ui/react-select";

const SelectTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState(theme);

  const setResolvedTheme = (resolvedTheme: string) => {
    setTheme(resolvedTheme);
    setValue(resolvedTheme);
  };

  const themes: { value: string; icon: ReactElement }[] = [
    { value: "system", icon: <Monitor size={16} /> },
    { value: "dark", icon: <Moon size={16} /> },
    { value: "light", icon: <Sun size={16} /> },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select.Root value={value} onValueChange={setResolvedTheme}>
      <Select.Trigger
        className={clsx(
          "flex h-8 items-center gap-1 px-2 text-sm font-medium",
          "rounded-lg border border-slate-7 bg-slate-3 shadow outline-none",
          "hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-productive-standard"
        )}
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-30 motion-safe:rdx-state-open:animate-slide-up-fade">
          <Select.Viewport className="rounded-lg border border-slate-7 bg-slate-3 shadow">
            {themes.map(({ value, icon }) => (
              <Select.Item
                key={value}
                value={value}
                className={clsx(
                  "relative flex h-8 items-center gap-1 px-2 text-sm font-medium",
                  "select-none outline-none",
                  "focus:bg-slate-5 motion-safe:duration-300 motion-safe:ease-productive-standard"
                )}
              >
                <Select.ItemText>
                  <div className="flex items-center gap-1">
                    {icon}
                    {value[0]?.toUpperCase() + value.substring(1)}
                  </div>
                </Select.ItemText>

                <Select.ItemIndicator>
                  <Check size={14} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectTheme;
