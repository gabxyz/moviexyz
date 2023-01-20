import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { useTheme } from "next-themes";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  DesktopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

const SelectTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState(theme);

  const setResolvedTheme = (resolvedTheme: string) => {
    setTheme(resolvedTheme);
    setValue(resolvedTheme);
  };

  const themes: { value: string; icon: ReactElement }[] = [
    { value: "system", icon: <DesktopIcon /> },
    { value: "dark", icon: <MoonIcon /> },
    { value: "light", icon: <SunIcon /> },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select.Root value={value} onValueChange={setResolvedTheme}>
      <Select.Trigger className="flex h-8 items-center gap-1.5 rounded-lg border border-slate-7 bg-slate-3 px-2 text-sm font-medium shadow outline-none hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard">
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-30">
          <Select.Viewport className="rounded-lg border border-slate-7 bg-slate-3 shadow">
            {themes.map(({ value, icon }) => (
              <Select.Item
                key={value}
                value={value}
                className="relative flex h-8 select-none items-center gap-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-5 motion-safe:duration-300 motion-safe:ease-expressive-standard"
              >
                <Select.ItemText>
                  <div className="flex items-center gap-1.5">
                    {icon}
                    {value[0]?.toUpperCase() + value.substring(1)}
                  </div>
                </Select.ItemText>

                <Select.ItemIndicator>
                  <CheckIcon />
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
