import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx from "clsx";
import * as React from "react";

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
          className={clsx(
            "inline-flex items-center px-3 py-1 text-sm font-semibold",
            "rounded-full bg-mauve-6 shadow-md",
            "motion-safe:rdx-side-bottom:animate-slide-down-fade motion-safe:rdx-side-top:animate-slide-up-fade",
            "motion-safe:rdx-side-left:animate-slide-left-fade motion-safe:rdx-side-right:animate-slide-right-fade"
          )}
        >
          {content}
          <TooltipPrimitive.Arrow
            width={12}
            height={5}
            className="fill-mauve-6"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
