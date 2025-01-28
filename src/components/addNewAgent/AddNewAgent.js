// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const AddNewAgent = ({ togglePopup, isOpen }) => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {isOpen && (
//         <motion.div
//           onClick={togglePopup}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//         >
//           <div className="bg-white rounded-lg shadow-md w-[50%] p-6">
//             <h2 className="text-xl font-bold mb-4">Add New Agent</h2>

//             <form>
//               <div className="grid grid-cols-1 gap-4 pt-4">
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="lead-source"
//                     className="text-sm font-medium mb-1"
//                   >
//                     Type
//                   </label>
//                   <select id="" className="p-2 border rounded-md bg-white">
//                     <option value="" selected disabled>
//                       Open this select menu
//                     </option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                   </select>
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="subject-company"
//                     className="text-sm font-medium mb-1"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     id=""
//                     className="p-2 border rounded-md"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="subject-company"
//                     className="text-sm font-medium mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="email"
//                     id=""
//                     className="p-2 border rounded-md"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="subject-company"
//                     className="text-sm font-medium mb-1"
//                   >
//                     Mobile
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="Mobile"
//                     id=""
//                     className="p-2 border rounded-md"
//                   />
//                 </div>

//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={togglePopup}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-500 m-0 text-white px-4 py-[3px] rounded shadow-md hover:bg-blue-600"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default AddNewAgent;

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

