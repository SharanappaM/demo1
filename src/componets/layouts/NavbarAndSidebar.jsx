// import React, { useState } from 'react';
// import { IoMdMenu } from 'react-icons/io';
// import logo from '../../assets/NextIQz.png';
// import { MdOutlineQrCodeScanner } from "react-icons/md";
// import qrcode from "../../assets/Website_qr.png"
// import ios from "../../assets/App_Store.webp"
// import and from "../../assets/Play_Store.webp"
// import { NavLink } from 'react-router-dom';
// import { FaNewspaper } from 'react-icons/fa6';
// import { MdInsights } from 'react-icons/md';
// import { MdEventAvailable } from 'react-icons/md';
// import { MdGroups2 } from 'react-icons/md';
// import { FaMicrophoneAlt } from "react-icons/fa";
// const NavbarAndSidebar = () => {



//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // State to handle modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const menuItems = [
//     { name: 'News', path: '/news', icon: <FaNewspaper /> },
//     { name: 'Insights', path: '/insights', icon: <MdInsights /> },
//     { name: 'Events', path: '/events', icon: <MdEventAvailable /> },
//     { name: 'Community', path: '/community', icon: <MdGroups2 /> },
//     { name: 'Podcast', path: '/podcast', icon: <FaMicrophoneAlt /> },
//   ];

//   const handleNavigation = () => {
//     if (isSidebarOpen) {
//       setIsSidebarOpen(false);
//     }
//   };

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };


//   return (

//     <>

//       {/* <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-black shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-10`}> */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-[0px_0px_0px_1.5px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-10`} >

//         <header className="flex items-center justify-between p-8  bg-white shadow-md"></header>
//         <nav className="space-y-2 ">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center px-4 mt-1 py-3 space-x-4 ${isActive ? 'border-2  border-blue-700 text-black m-2 rounded-3xl' : 'hover:bg-blue-700 m-2 rounded-2xl'
//                 }`
//               }
//               onClick={handleNavigation}
//             >
//               <span className="text-2xl">{item.icon}</span>
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>
//         <div className="navbar fixed bottom-0 left-0 w-full text-center mb-2">
//           <p className="text-black text-sm">Copyright © NextIQz Limited. All rights reserved.</p>
//         </div>
//       </div>


//       {/* Navbar */}
//       <div className="navbar fixed top-0 left-0 w-full bg-blue-700 text-white z-10">
//         <div className="flex justify-between items-center p-3">
//           <div className="ml-4">
//             <img src={logo} alt="" width={150} />
//           </div>
//           <button
//             className="lg:hidden p-2 text-blue-900 focus:outline-none"
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           >
//             <IoMdMenu className="w-6 h-6" />
//           </button>
//           <div className="flex items-center space-x-4">
//             <button onClick={openModal} className="rounded-full text-white flex items-center px-4 py-2 hover:text-black">
//               <span className="mr-2">Download App</span>
//               <MdOutlineQrCodeScanner className="text-lg" />
//             </button>
//             <button className="rounded-full text-white px-4 py-2 hover:text-black">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>




//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-1/3">
//             <div className="p-4 border-b bg-blue-700">
//               <div className='ml-16 mb-2'>
//                 <img src={logo} alt="" width={200} className='ml-16' />
//               </div>
//               <h2 className="text-xl font-semibold text-center text-white">Transform Your Startup Journey with Our App</h2>

//             </div>
//             <div className="p-6">
//               <p className="text-gray-700 text-center mb-4">
//                 Scan the QR code to download our app for iOS or Android.
//               </p>
//               <div className="flex justify-center mb-6 space-x-14">
//                 {/* iOS QR Code */}
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={qrcode}
//                     alt="iOS QR Code"
//                     className="w-32 h-32 mb-2"
//                   />
//                   <div className="flex items-center space-x-2">
//                     <img
//                       src={ios}
//                       alt="iOS"
//                       className="w-32 h-10"
//                     />

//                   </div>
//                 </div>

//                 <div className="flex flex-col items-center">
//                   <img
//                     src={qrcode}
//                     alt="Android QR Code"
//                     className="w-32 h-32 mb-2"
//                   />
//                   <div className="flex items-center space-x-2">
//                     <img
//                       src={and}
//                       alt="Android"
//                       className="w-32 h-10"
//                     />

//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-4 flex justify-end space-x-2">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
//               >
//                 Close
//               </button>

//             </div>
//           </div>
//         </div>
//       )}
//     </>

//   )
// }

// export default NavbarAndSidebar



// import React, { useState } from 'react';
// import { IoMdMenu } from 'react-icons/io';
// import logo from '../../assets/NextIQz.png';
// import { MdOutlineQrCodeScanner } from "react-icons/md";
// import qrcode from "../../assets/Website_qr.png"
// import ios from "../../assets/App_Store.webp"
// import and from "../../assets/Play_Store.webp"
// import { NavLink } from 'react-router-dom';
// import { FaNewspaper } from 'react-icons/fa6';
// import { MdInsights } from 'react-icons/md';
// import { MdEventAvailable } from 'react-icons/md';
// import { MdGroups2 } from 'react-icons/md';
// import { FaMicrophoneAlt } from "react-icons/fa";
// import Navbar from './Navbar';
// const NavbarAndSidebar = () => {



//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // State to handle modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const menuItems = [
//     { name: 'News', path: '/news', icon: <FaNewspaper /> },
//     { name: 'Insights', path: '/insights', icon: <MdInsights /> },
//     { name: 'Events', path: '/events', icon: <MdEventAvailable /> },
//     { name: 'Community', path: '/community', icon: <MdGroups2 /> },
//     { name: 'Podcast', path: '/podcast', icon: <FaMicrophoneAlt /> },
//   ];

//   const handleNavigation = () => {
//     if (isSidebarOpen) {
//       setIsSidebarOpen(false);
//     }
//   };

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };


//   return (

//     <>

//       {/* <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-black shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-10`}> */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-[0px_0px_0px_1.5px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-10`} >

//         <header className="flex items-center justify-between p-8  bg-white shadow-md"></header>
//         <nav className="space-y-2 ">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center px-4 mt-1 py-3 space-x-4 ${isActive ? 'border-2  border-blue-700 text-black m-2 rounded-3xl' : 'hover:bg-blue-700 m-2 rounded-2xl'
//                 }`
//               }
//               onClick={handleNavigation}
//             >
//               <span className="text-2xl">{item.icon}</span>
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>
//         <div className="navbar fixed bottom-0 left-0 w-full text-center mb-2">
//           <p className="text-black text-sm">Copyright © NextIQz Limited. All rights reserved.</p>
//         </div>
//       </div>


//       {/* Navbar */}
//       <Navbar/>




//     </>

//   )
// }

// export default NavbarAndSidebar











import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import qrcode from "../../assets/Website_qr.png";
import ios from "../../assets/App_Store.webp";
import and from "../../assets/Play_Store.webp";
import logo from "../../assets/NextIQz.png";

const NavbarAndSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleNavigation = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        openModal={openModal}
        onSearch={handleSearch}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} handleNavigation={handleNavigation} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <div className="p-4 border-b bg-blue-700">
              <div className="ml-16 mb-2">
                <img src={logo} alt="Logo" width={200} className="ml-16" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white">
                Transform Your Startup Journey with Our App
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-center mb-4">
                Scan the QR code to download our app for iOS or Android.
              </p>
              <div className="flex justify-center mb-6 space-x-14">
                <div className="flex flex-col items-center">
                  <img src={qrcode} alt="QR Code" className="w-32 h-32 mb-2" />
                  <img src={ios} alt="iOS" className="w-32 h-10" />
                </div>
                <div className="flex flex-col items-center">
                  <img src={qrcode} alt="QR Code" className="w-32 h-32 mb-2" />
                  <img src={and} alt="Android" className="w-32 h-10" />
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarAndSidebar;

