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
          className="h-9 overflow-hidden rounded-lg border border-slate-7 bg-slate-3 px-3 shadow-md duration-300 ease-productive-standard hover:border-slate-8 hover:bg-slate-4"
        >
          {triggerIcon}
        </Dialog.Trigger>
      </Tooltip>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 cursor-pointer overflow-y-auto bg-blackA-9 backdrop-blur-[1px] rdx-state-open:animate-in rdx-state-open:fade-in-50 rdx-state-open:duration-200 rdx-state-open:ease-productive-standard">
          <Dialog.Content
            onCloseAutoFocus={(e) => e.preventDefault()}
            className={clsx(
              "relative m-4 w-fit cursor-auto p-4 sm:mx-auto sm:my-8 sm:max-w-xl",
              "rounded-xl bg-slate-2",
              "rdx-state-open:animate-in rdx-state-open:zoom-in-90 rdx-state-open:duration-200 rdx-state-open:ease-productive-standard"
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
            <Dialog.Close className="absolute top-4 right-4 text-slate-11 duration-300 ease-productive-standard hover:text-slate-12">
              {closeIcon}
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
