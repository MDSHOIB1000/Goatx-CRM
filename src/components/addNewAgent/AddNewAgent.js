
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

const AddNewAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open Popup
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <Dialog.Title className="text-lg font-bold">Popup Title</Dialog.Title>
          <Dialog.Description className="text-gray-600">
            This is a sample popup using Headless UI and Tailwind.
          </Dialog.Description>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default AddNewAgent;

