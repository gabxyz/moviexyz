import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import cx from "classnames";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  align?: TooltipPrimitive.TooltipContentProps["align"];
  side?: TooltipPrimitive.TooltipContentProps["side"];
}

const Tooltip = ({
  children,
  content,
  align = "center",
  side = "bottom",
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={7}
          className={cx(
            "rdx-side-bottom:animate-slide-down-fade rdx-side-left:animate-slide-left-fade rdx-side-right:animate-slide-right-fade rdx-side-top:animate-slide-up-fade",
            "inline-flex items-center px-2.5 py-1.5",
            "rounded-xl bg-blackA-9 text-sm font-medium text-slate-1 shadow-md dark:text-slate-12"
          )}
        >
          {content}
          <TooltipPrimitive.Arrow
            width={12}
            height={5}
            className="fill-blackA-9"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
