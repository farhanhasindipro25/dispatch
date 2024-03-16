import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function MyDialog({ children, onClose }: any) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xlp-6 text-left align-middle shadow-xl transition-all">
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
