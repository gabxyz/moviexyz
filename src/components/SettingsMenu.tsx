import * as Dialog from "@radix-ui/react-dialog";
import { GearIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SelectTheme from "./SelectTheme";

const SettingsMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root modal onOpenChange={(o) => setOpen(o)}>
      <Dialog.Trigger className="h-9 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-200 motion-safe:ease-expressive-standard">
        <GearIcon />
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
                className="fixed inset-0 z-50 cursor-pointer bg-blackA-8 backdrop-blur-[1px]"
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
                    className="relative z-50 my-8 mx-auto max-w-xl cursor-auto rounded-lg border border-slate-7 bg-slate-2 p-4 shadow-md"
                  >
                    <Dialog.Title className="font-semibold">
                      settings
                    </Dialog.Title>
                    <Dialog.Description className="text-slate-11">
                      select page theme and movie genres
                    </Dialog.Description>
                    <div>
                      <div className="mt-10 flex items-end justify-between">
                        <div className="flex flex-col">
                          <h3 className="font-semibold">theme</h3>
                          <p className="text-slate-11">
                            choose a page color theme or use your system theme
                          </p>
                        </div>
                        <SelectTheme />
                      </div>
                    </div>
                    <Dialog.Close />
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

export default SettingsMenu;
