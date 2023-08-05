import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";

interface ComponentProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  testId?: string;
}

const BUIModal: React.FC<PropsWithChildren<ComponentProps>> = ({
  title,
  isOpen,
  handleClose,
  children,
  testId,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        data-testid={testId}
        className="relative z-10"
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl backdrop-blur-xl bg-slate-50 bg-opacity-60 p-6 text-left align-middle shadow-xl transition-all md:text-lg sm:text-md">
                <Dialog.Title
                  as="h3"
                  className="text-center text-2xl font-medium leading-6 mb-4"
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { BUIModal };
