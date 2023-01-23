import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root modal onOpenChange={(o) => setOpen(o)}>
      <Tooltip content={title}>
        <Dialog.Trigger
          aria-label={title}
          className="h-9 overflow-hidden rounded-lg border border-slate-7 bg-slate-3 px-3 drop-shadow-md hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
        >
          {triggerIcon}
        </Dialog.Trigger>
      </Tooltip>
      <AnimatePresence>
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
                  stiffness: 250,
                }}
                className="absolute inset-0 z-20 cursor-pointer bg-blackA-9 backdrop-blur-[1px]"
              >
                <Dialog.Content
                  asChild
                  forceMount
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.65 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    className="relative m-4 max-h-[calc(100vh-64px)] w-fit cursor-auto overflow-auto rounded-xl bg-slate-2 p-4 sm:mx-auto sm:my-8 sm:max-w-xl"
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
                    <Dialog.Close className="absolute top-4 right-4 text-slate-11 hover:text-slate-12 motion-safe:duration-300 motion-safe:ease-expressive-standard">
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
