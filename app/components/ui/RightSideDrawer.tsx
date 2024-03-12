import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function RightSideDrawer({ open, setOpen, children, ...props }: any) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex flex-col w-full max-w-sm pb-12 overflow-y-auto bg-neutral-900 ">
              <div className="flex items-center justify-between p-4 border-b border-neutral-700">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo/alt logo.svg"
                    width={2160}
                    height={1080}
                    alt="Dispatch Logo"
                    className="cursor-pointer h-5 w-5"
                  />
                  <h2 className="text-neutral-300 text-sm font-semibold italic">
                    DISPATCH
                  </h2>
                </div>
                <button onClick={() => setOpen(false)}>
                  <XMarkIcon
                    className="w-6 h-6 text-neutral-300"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default RightSideDrawer;
