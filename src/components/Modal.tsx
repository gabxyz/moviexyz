import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root modal onOpenChange={(o) => setOpen(o)}>
      <Tooltip content={title}>
        <Dialog.Trigger
          aria-label={title}
          className={clsx(
            "h-8 overflow-hidden px-2.5 text-slate-11",
            "rounded-lg border border-slate-7 bg-slate-3 shadow-md",
            "hover:border-slate-8 hover:bg-slate-4 hover:text-slate-12",
            "motion-safe:duration-200 motion-safe:ease-productive-standard"
          )}
        >
          {triggerIcon}
        </Dialog.Trigger>
      </Tooltip>
      <AnimatePresence mode="wait">
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 350,
                }}
                className="fixed inset-0 cursor-pointer overflow-y-auto bg-blackA-9 backdrop-blur-[1px]"
              >
                <Dialog.Content
                  asChild
                  forceMount
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 350,
                    }}
                    className="relative m-4 w-fit cursor-auto rounded-xl bg-slate-3 p-4
                  sm:mx-auto sm:my-8 sm:max-w-xl"
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
                    <Dialog.Close className="absolute top-4 right-4 text-slate-11 hover:text-slate-12 motion-safe:duration-200 motion-safe:ease-productive-standard">
                      {closeIcon}
                    </Dialog.Close>
                  </motion.div>
                </Dialog.Content>
              </motion.div>
            </Dialog.Overlay>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Modal;
