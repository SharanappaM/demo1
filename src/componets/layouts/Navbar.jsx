// import React, { useState } from 'react'
// import logo from '../../assets/NextIQz.png';
// import { MdOutlineQrCodeScanner } from 'react-icons/md';
// import { IoMdMenu } from 'react-icons/io';
// import qrcode from "../../assets/Website_qr.png"
// import ios from "../../assets/App_Store.webp"
// import and from "../../assets/Play_Store.webp"

// const Navbar = () => {
    
//       const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//       // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleNavigation = () => {
//     if (isSidebarOpen) {
//       setIsSidebarOpen(false);
//     }
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//      <>
//         <div className="navbar fixed top-0 left-0 w-full bg-blue-700 text-white z-10">
//             <div className="flex justify-between items-center p-3">
//                 <div className="ml-4">
//                     <img src={logo} alt="" width={150} />
//                 </div>
//                 <button
//                     className="lg:hidden p-2 text-blue-900 focus:outline-none"
//                     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 >
//                     <IoMdMenu className="w-6 h-6" />
//                 </button>
//                 <div className="flex items-center space-x-4">
//                     <button onClick={openModal} className="rounded-full text-white flex items-center px-4 py-2 hover:text-black">
//                         <span className="mr-2">Download App</span>
//                         <MdOutlineQrCodeScanner className="text-lg" />
//                     </button>
//                     <button className="rounded-full text-white px-4 py-2 hover:text-black">
//                         Login
//                     </button>
//                 </div>
//             </div>
//         </div>





// {isModalOpen && (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-1/3">
//         <div className="p-4 border-b bg-blue-700">
//           <div className='ml-16 mb-2'>
//             <img src={logo} alt="" width={200} className='ml-16' />
//           </div>
//           <h2 className="text-xl font-semibold text-center text-white">Transform Your Startup Journey with Our App</h2>

//         </div>
//         <div className="p-6">
//           <p className="text-gray-700 text-center mb-4">
//             Scan the QR code to download our app for iOS or Android.
//           </p>
//           <div className="flex justify-center mb-6 space-x-14">
//             {/* iOS QR Code */}
//             <div className="flex flex-col items-center">
//               <img
//                 src={qrcode}
//                 alt="iOS QR Code"
//                 className="w-32 h-32 mb-2"
//               />
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={ios}
//                   alt="iOS"
//                   className="w-32 h-10"
//                 />

//               </div>
//             </div>

//             <div className="flex flex-col items-center">
//               <img
//                 src={qrcode}
//                 alt="Android QR Code"
//                 className="w-32 h-32 mb-2"
//               />
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={and}
//                   alt="Android"
//                   className="w-32 h-10"
//                 />

//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex justify-end space-x-2">
//           <button
//             onClick={closeModal}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
//           >
//             Close
//           </button>

//         </div>
//       </div>
//     </div>
//   )}
//      </>
//     )
// }

// export default Navbar


// import React from "react";
// import { IoMdMenu } from "react-icons/io";
// import { MdOutlineQrCodeScanner } from "react-icons/md";
// import logo from "../../assets/NextIQz.png";

// const Navbar = ({ toggleSidebar, openModal }) => {
//   return (
//     <div className="navbar fixed top-0 left-0 w-full bg-blue-700 text-white z-10">
//       <div className="flex justify-between items-center p-3">
//         <div className="ml-4">
//           {/* <img src={logo} alt="Logo" width={150} /> */}
//         </div>
//         <button
//           className="lg:hidden p-2 text-blue-900 focus:outline-none"
//           onClick={toggleSidebar}
//         >
//           <IoMdMenu className="w-6 h-6" />
//         </button>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={openModal}
//             className="rounded-full text-white flex items-center px-4 py-2 hover:text-black"
//           >
//             <span className="mr-2">Download App</span>
//             <MdOutlineQrCodeScanner className="text-lg" />
//           </button>
//           <button className="rounded-full text-white px-4 py-2 hover:text-black">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import logo from "../../assets/NextIQz.png";

import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ toggleSidebar, openModal, onSearch, openAddModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddPodcast = () => {
    navigate("/add-podcast");
  };

  const handleAddNews = () => {
    navigate("/add-news");
  };

  const handleAddEvent = () => {
    navigate("/add-event");
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-blue-700 text-white z-10">
      <div className="flex justify-between items-center p-3">
        <div className="ml-4">
          <img src={logo} alt="Logo" width={150} />
        </div>

        {/* Sidebar Toggle */}
        <button
          className="lg:hidden p-2 text-blue-900 focus:outline-none"
          onClick={toggleSidebar}
        >
          <IoMdMenu className="w-6 h-6" />
        </button>

        {/* Search Component */}
        <div className="hidden md:flex">
          <Search onSearch={onSearch} />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {location.pathname === "/podcast" && (
            <button
              onClick={openAddModal}
              className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700"
            >
              Add Podcast
            </button>
          )}
          {location.pathname === "/news" && (
            <button
              onClick={handleAddNews}
              className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700"
            >
              Add News
            </button>
          )}
          {location.pathname === "/events" && (
            <button
              onClick={handleAddEvent}
              className="bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700"
            >
              Add Event
            </button>
          )}
          <button
            onClick={openModal}
            className="rounded-full text-white flex items-center px-4 py-2 hover:text-black"
          >
            <span className="mr-2">Download App</span>
            <MdOutlineQrCodeScanner className="text-lg" />
          </button>
          <button className="rounded-full text-white px-4 py-2 hover:text-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
