import React from "react";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";
import Tooltip from "@/components/Tooltip";
interface ModalProps {
  triggerIcon: React.ReactElement;
  closeIcon: React.ReactElement;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal = ({
  triggerIcon,
  closeIcon,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <Dialog.Root>
      <Tooltip content={title}>
        <Dialog.Trigger
          aria-label={title}
          className={clsx(
            "h-9 overflow-hidden px-3 ",
            "rounded-lg border border-slate-7 bg-slate-3 shadow-md",
            "hover:border-slate-8 hover:bg-slate-4",
            "duration-300 ease-productive-standard"
          )}
        >
          {triggerIcon}
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx(
            "fixed inset-0 overflow-y-auto",
            "cursor-pointer bg-blackA-9 backdrop-blur-[1px]",
            "motion-safe:rdx-state-open:animate-in motion-safe:rdx-state-open:fade-in-75",
            "motion-safe:rdx-state-open:duration-150 motion-safe:rdx-state-open:ease-productive-standard"
          )}
        >
          <Dialog.Content
            onCloseAutoFocus={(e) => e.preventDefault()}
            className={clsx(
              "relative m-4 w-fit p-4 sm:mx-auto sm:my-8 sm:max-w-xl",
              "cursor-auto rounded-xl bg-slate-2",
              "motion-safe:rdx-state-open:animate-in motion-safe:rdx-state-open:fade-in-90 motion-safe:rdx-state-open:zoom-in-50",
              "motion-safe:rdx-state-open:duration-300 motion-safe:rdx-state-open:ease-productive-entrance"
            )}
          >
            <div className="flex flex-col items-center text-center">
              <Dialog.Title className="text-lg font-semibold">
                {title}
              </Dialog.Title>
              <Dialog.Description className="text-sm text-slate-11">
                {description}
              </Dialog.Description>
            </div>
            {children}
            <Dialog.Close className="absolute top-4 right-4 text-slate-11 hover:text-slate-12 motion-safe:duration-300 motion-safe:ease-productive-standard">
              {closeIcon}
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
