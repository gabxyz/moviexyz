import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

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
      <Dialog.Trigger className="h-9 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-200 motion-safe:ease-expressive-standard">
        {triggerIcon}
      </Dialog.Trigger>
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
                className="fixed inset-0 z-50 cursor-pointer bg-blackA-9 backdrop-blur-[1px]"
              >
                <Dialog.Content asChild forceMount>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.65 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    className="relative z-50 m-4 max-w-xl cursor-auto rounded-xl bg-slate-2 p-4 md:my-8 md:mx-auto"
                  >
                    <div className="flex flex-col items-center">
                      <Dialog.Title className="text-lg font-semibold">
                        {title}
                      </Dialog.Title>
                      <Dialog.Description className="text-sm text-slate-11">
                        {description}
                      </Dialog.Description>
                    </div>
                    {children}
                    <Dialog.Close className="h-9 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-200 motion-safe:ease-expressive-standard">
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
