import {
  ArrowBottomRightIcon,
  CheckIcon,
  ChevronDownIcon,
  DesktopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";

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
      <Select.Trigger className="flex h-10 items-center gap-2 rounded-md border border-gray-7 bg-gray-3 px-4 text-sm font-medium shadow-lg outline-none hover:border-gray-8 hover:bg-gray-4 motion-safe:duration-150 motion-safe:ease-productive-standard">
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport className="rounded-md border border-gray-7 bg-gray-3 shadow-lg">
          <Select.Group className="divide-y divide-gray-7">
            {themes.map(({ value, icon }) => (
              <Select.Item
                key={value}
                value={value}
                className="relative flex h-10 select-none items-center gap-2 px-4 text-sm font-medium  outline-none focus:bg-gray-4 motion-safe:duration-150 motion-safe:ease-productive-standard"
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
