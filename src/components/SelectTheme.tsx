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
  const { resolvedTheme, setTheme } = useTheme();
  const [value, setValue] = useState(resolvedTheme);

  const setResolvedTheme = (resolvedTheme: string) => {
    setValue(resolvedTheme);
    setTheme(resolvedTheme);
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
      <Select.Content>
        <Select.Viewport className="rounded-lg border border-slate-7 bg-slate-3 shadow">
          <Select.Group className="divide-y divide-slate-7">
            {themes.map(({ value, icon }) => (
              <Select.Item
                key={value}
                value={value}
                className="relative flex h-8 select-none items-center gap-1.5 px-2 text-sm font-medium  outline-none focus:bg-slate-5 motion-safe:duration-300 motion-safe:ease-expressive-standard"
              >
                <Select.ItemText>
                  <div className="flex items-center gap-1.5">
                    {icon}
                    {value}
                  </div>
                </Select.ItemText>

                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectTheme;
