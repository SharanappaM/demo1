

// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import { FaArrowLeft } from "react-icons/fa";
// import { IoArrowBackCircle } from "react-icons/io5";
// import { TbArrowBackUp } from "react-icons/tb";
// import { TiArrowBack } from "react-icons/ti";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from 'react-toastify';
// import axios from "axios";
// import { IoMdMore } from "react-icons/io";




// const MediaCard = ({ media, playingMedia, setPlayingMedia, handleViewDetails }) => {
//     const isPlaying = playingMedia === media.url;

//     const handlePlay = () => {
//         setPlayingMedia(isPlaying ? null : media.url);
//     };

//     return (
//         <div

//             className="relative cursor-pointer bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//         >
//             {!isPlaying ? (
//                 <img
//                     onClick={handlePlay}
//                     src={media.thumbnail || "https://via.placeholder.com/300"}
//                     alt={media.title}
//                     className="w-full h-48 object-fill"
//                 />
//             ) : media.type === "video" ? (
//                 <video controls autoPlay className="w-full h-48">
//                     <source src={media.url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             ) : (
//                 <audio controls autoPlay className="w-full px-4">
//                     <source src={media.url} type="audio/mpeg" />
//                     Your browser does not support the audio tag.
//                 </audio>
//             )}


//             <div className="p-4" onClick={() => handleViewDetails(media)}>
//                 <h3 className="text-lg font-bold">{media.title}</h3>
//             </div>
//         </div>
//     );
// };

// const Podcast = () => {
//     const [playingMedia, setPlayingMedia] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const location = useLocation();
//     const navigate = useNavigate();

//     const [isModalOpen, setIsModalOpen] = useState(false);




//     const formki = useFormik({
//         initialValues: {
//             title: null,
//             description: null,
//             image: null,
//             author: null,
//             category: null,
//             sourceLink: null,
//         },
//         onSubmit: (values) => {

//             // axios.post("http://34.45.179.225:8080/employee/news/saveNewsFeed", values)
//             // http://localhost:5173/events
//             axios.post(`http://localhost:9191/user/podcast/savePodcast`, values)

//                 .then(res => {
//                     console.log(res.data);

//                     closeModal();
//                     toast.success("Podcast created Successfully")
//                     formki.setFieldValue('title', "");


//                 }).catch(err => {
//                     console.log(err);
//                     toast.error("failed to create new podcast")

//                 })
//         }
//     })

//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlayVideo = () => {
//       setIsPlaying(true);
//     };



//     const handleViewDetails = (item) => {
//         navigate("/podcast", { state: item });
//     };

//     // Navigate back
//     const handleBack = () => {
//         navigate("/podcast");
//     };


//     // Function to open the modal
//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };


//     const mediaList = [
//         {
//             title: "Google CEO Sundar Pichai’s I/O 2017 keynote",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/vWLcyFtni6U", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//             thumbnail: "https://img.youtube.com/vi/vWLcyFtni6U/hqdefault.jpg",
//             // title: "Awesome React Video",
//             // videoId: "vWLcyFtni6U",
//             // profileImage: "https://yt3.googleusercontent.com/example",
//             // author: "Tech Channel",
//             // date: "3 days ago"
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },


//     ];

//     // Filter media based on search input
//     const filteredMedia = mediaList.filter((media) =>
//         media.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );


//     const renderPoadcastFedd = () => (

//         <>
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//             />


//             <div className="container mx-auto px-5 py-10">

//                 <div style={{ marginTop: "5.1px" }} className="fixed lg:top-16 lf:left-64 sm:top-2  lg:w-4/5 bg-slate-200 z-50">
//                     <div className="px-4 py-2 flex justify-center flex-1">
//                         <input
//                             type="text"
//                             placeholder="🔍 Search podcasts or videos..."
//                             className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />

//                         <button className="w-44 border-2  border-blue-700 ml-5" onClick={openModal}>Add Podcast</button>
//                     </div>
//                 </div>



//                 {/* Spacing for fixed header */}
//                 <div className="mt-6"></div>

//                 {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
//                     {filteredMedia.length > 0 ? (
//                         filteredMedia.map((media, index) => (

//                             <>
//                                 <MediaCard
//                                     key={index}
//                                     media={media}
//                                     playingMedia={playingMedia}
//                                     setPlayingMedia={setPlayingMedia}
//                                     handleViewDetails={handleViewDetails}
//                                 />



//                             </>
//                         ))
//                     ) : (
//                         <p className="text-center col-span-3 text-gray-600">
//                             No results found for "{searchTerm}"
//                         </p>
//                     )}
//                 </div> */}

//                 <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//                 {
//                     mediaList.map((item, index) => (
//                         <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">

//                             <div className="relative">
//                                 <iframe
//                                     className="w-full h-48"
//                                     src={item.url}
//                                     title="YouTube Video"
//                                     allowFullScreen
//                                 ></iframe>
//                             </div>


//                             <div className="p-4 flex gap-3">

//                                 <img
//                                     className="w-10 h-10 rounded-full"
//                                     src={item.profileImage}
//                                     alt="Channel"
//                                 />

//                                 <div className="flex-1">

//                                     <h3 className="text-lg font-semibold line-clamp-2">
//                                         {item.title}
//                                     </h3>


//                                     <p className="text-sm text-gray-600">
//                                         <span className="font-medium">{item.author}</span> • {item.date}
//                                     </p>
//                                 </div>


//                                 <button className="text-gray-500 hover:text-gray-700">
//                                     <IoMdMore size={20} />
//                                 </button>
//                             </div>
//                         </div>

                       
//                     ))
//                 }

//                 </div>
               



//             </div>

//             {isModalOpen && (


                // <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                //     <div className="bg-white rounded-lg shadow-lg max-w-4xl w-1/3">
                //         <div className="p-4 border-b bg-blue-700">
                //             <h2 className="text-xl font-semibold text-center text-white">Add New Podcast</h2>
                //         </div>

                //         <div className="flex items-center justify-center bg-gray-100  px-4 w-full rounded-lg">
                //             <form onSubmit={formki.handleSubmit} className="p-6 w-full">
                //                 <div className="grid grid-cols-1 gap-4">


                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             Title
                //                         </label>
                //                         <input
                //                             type="text"
                //                             name='title'
                //                             value={formki.values.title}
                //                             onChange={formki.handleChange}
                //                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>

                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             description
                //                         </label>
                //                         <textarea
                //                             type="text"
                //                             name='description'
                //                             value={formki.values.description}
                //                             onChange={formki.handleChange}
                //                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>

                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             Upload Image
                //                         </label>
                //                         <input
                //                             // type="file"
                //                             type="text"
                //                             name='image'
                //                             value={formki.values.image}
                //                             onChange={formki.handleChange}
                //                             className="p-2  w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>



                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             author
                //                         </label>
                //                         <input
                //                             type="text"
                //                             name='author'
                //                             value={formki.values.author}
                //                             onChange={formki.handleChange}
                //                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>
                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             sourceLink
                //                         </label>
                //                         <input
                //                             type="text"
                //                             name='sourceLink'
                //                             value={formki.values.sourceLink}
                //                             onChange={formki.handleChange}
                //                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>
                //                     <div className="flex items-center space-x-4">
                //                         <label className="text-gray-700 font-medium capitalize w-1/3">
                //                             category
                //                         </label>
                //                         <input
                //                             type="text"
                //                             name='category'
                //                             value={formki.values.category}
                //                             onChange={formki.handleChange}
                //                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                //                             placeholder={`Enter Event Title`}
                //                             required
                //                         />
                //                     </div>


                //                 </div>

                //                 <button
                //                     type="submit"
                //                     className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                //                 >
                //                     Submit
                //                 </button>

                //                 <div className="p-4 flex justify-end space-x-2">
                //                     <button
                //                         onClick={closeModal}
                //                         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
                //                     >
                //                         Close
                //                     </button>
                //                 </div>
                //             </form>


                //         </div>


                //     </div>
                // </div>

//             )}
//         </>


//     );

//     const renderFullPodcastDetails = () => {
//         const item = location.state;
//         if (!item) {
//             return null;
//         }

//         console.log(item, "item");


//         return (
//             <>
//                 <div className="fixed w-10/12 px-4 z-50 top-20 flex items-center  ">
//                     <button onClick={handleBack} className="flex items-center text-lg font-semibold ">

//                         <TbArrowBackUp className="mr-2 text-black size-10" />
//                         Go Back
//                     </button>
//                 </div>



//                 <div className="w-full mt-5 flex justify-start items-center  py-10 px-4">
//                     <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
//                         {/* Video Section */}
//                         <div className="relative">
//                             <video
//                                 className="w-full h-64 md:h-96 object-fill"
//                                 controls
//                                 poster={item.profileImage}
//                             >
//                                 <source
//                                     // src="https://www.w3schools.com/html/mov_bbb.mp4"
//                                     src={item.url}
//                                     type="video/mp4"
//                                 />
//                                 Your browser does not support the video tag.
//                             </video>
//                             <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
//                                 ⏱ {item.duration}
//                             </span>
//                         </div>

//                         {/* Card Content */}
//                         <div className="p-6">
//                             <h2 className="text-2xl font-semibold text-gray-800">
//                                 {/* Introduction to React.js (Video) */}
//                                 {item.title}
//                             </h2>
//                             <p className="text-gray-600 text-sm mt-2">
//                                 {item.description}
//                             </p>
//                             <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
//                                 <span className="bg-gray-200 px-3 py-1 rounded-md">📅 {item.date}</span>
//                                 <span className="bg-gray-200 px-3 py-1 rounded-md">🎥 {item.type}</span>
//                             </div>



//                         </div>
//                     </div>
//                 </div>


//                 <div className="w-80 h-screen bg-gray-100 p-4 shadow-md fixed right-0 top-0 overflow-y-auto mt-16 hidden lg:block">

//                 </div>
//             </>

//         )


//     };






//     return location.state ? renderFullPodcastDetails() : renderPoadcastFedd();
// };

// export default Podcast;









// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import { FaArrowLeft } from "react-icons/fa";
// import { IoArrowBackCircle } from "react-icons/io5";
// import { TbArrowBackUp } from "react-icons/tb";
// import { TiArrowBack } from "react-icons/ti";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from 'react-toastify';
// import axios from "axios";
// import { IoMdMore } from "react-icons/io";




// const MediaCard = ({ media, playingMedia, setPlayingMedia, handleViewDetails }) => {
//     const isPlaying = playingMedia === media.url;

//     const handlePlay = () => {
//         setPlayingMedia(isPlaying ? null : media.url);
//     };

//     return (
//         <div

//             className="relative cursor-pointer bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//         >
//             {!isPlaying ? (
//                 <img
//                     onClick={handlePlay}
//                     src={media.thumbnail || "https://via.placeholder.com/300"}
//                     alt={media.title}
//                     className="w-full h-48 object-fill"
//                 />
//             ) : media.type === "video" ? (
//                 <video controls autoPlay className="w-full h-48">
//                     <source src={media.url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             ) : (
//                 <audio controls autoPlay className="w-full px-4">
//                     <source src={media.url} type="audio/mpeg" />
//                     Your browser does not support the audio tag.
//                 </audio>
//             )}


//             <div className="p-4" onClick={() => handleViewDetails(media)}>
//                 <h3 className="text-lg font-bold">{media.title}</h3>
//             </div>
//         </div>
//     );
// };

// const Podcast = () => {
//     const [playingMedia, setPlayingMedia] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const location = useLocation();
//     const navigate = useNavigate();

//     const [isModalOpen, setIsModalOpen] = useState(false);




//     const formki = useFormik({
//         initialValues: {
//             title: null,
//             description: null,
//             image: null,
//             author: null,
//             category: null,
//             sourceLink: null,
//         },
//         onSubmit: (values) => {

//             // axios.post("http://34.45.179.225:8080/employee/news/saveNewsFeed", values)
//             // http://localhost:5173/events
//             axios.post(`http://localhost:9191/user/podcast/savePodcast`, values)

//                 .then(res => {
//                     console.log(res.data);

//                     closeModal();
//                     toast.success("Podcast created Successfully")
//                     formki.setFieldValue('title', "");


//                 }).catch(err => {
//                     console.log(err);
//                     toast.error("failed to create new podcast")

//                 })
//         }
//     })

//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlayVideo = () => {
//       setIsPlaying(true);
//     };



//     const handleViewDetails = (item) => {
//         navigate("/podcast", { state: item });
//     };

//     // Navigate back
//     const handleBack = () => {
//         navigate("/podcast");
//     };


//     // Function to open the modal
//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     // Function to close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };


//     // const [searchTerm, setSearchTerm] = useState("");

//     const handleSearch = (query) => {
//       setSearchTerm(query);
//     };

//     const mediaList = [
//         {
//             title: "Google CEO Sundar Pichai’s I/O 2017 keynote",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/vWLcyFtni6U", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//             thumbnail: "https://img.youtube.com/vi/vWLcyFtni6U/hqdefault.jpg",
//             // title: "Awesome React Video",
//             // videoId: "vWLcyFtni6U",
//             // profileImage: "https://yt3.googleusercontent.com/example",
//             // author: "Tech Channel",
//             // date: "3 days ago"
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },
//         {
//             title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
//             description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief. He and other Googlers announced several new “AI first” products and features, including Google Lens, Smart Reply for Gmail and Google Assistant for iPhone.",
//             duration: "12:30",
//             date: "18 May 2017",
//             author: "Sharan_hbd",
//             url: "https://www.youtube.com/embed/h3M4bm2EveM", // Sample MP4
//             profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//         },
      
       

//     ];

//     const filteredMedia = mediaList.filter((media) =>
//         media.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );


//     const renderPoadcastFedd = () => (

//         <>
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//             />


//             <div className="container mx-auto px-5 py-10">

               


//                 {/* Spacing for fixed header */}
//                 <div className="mt-6"></div>

              

//                 <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//                 {
//                     mediaList.map((item, index) => (
//                         <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">

//                             <div className="relative">
//                                 <iframe
//                                     className="w-full h-48"
//                                     src={item.url}
//                                     title="YouTube Video"
//                                     allowFullScreen
//                                 ></iframe>
//                             </div>


//                             <div className="p-4 flex gap-3">

//                                 <img
//                                     className="w-10 h-10 rounded-full"
//                                     src={item.profileImage}
//                                     alt="Channel"
//                                 />

//                                 <div className="flex-1">

//                                     <h3 className="text-lg font-semibold line-clamp-2">
//                                         {item.title}
//                                     </h3>


//                                     <p className="text-sm text-gray-600">
//                                         <span className="font-medium">{item.author}</span> • {item.date}
//                                     </p>
//                                 </div>


//                                 <button className="text-gray-500 hover:text-gray-700">
//                                     <IoMdMore size={20} />
//                                 </button>
//                             </div>
//                         </div>

                       
//                     ))
//                 }

//                 </div>
               



//             </div>

//             {isModalOpen && (


//                 <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="bg-white rounded-lg shadow-lg max-w-4xl w-1/3">
//                         <div className="p-4 border-b bg-blue-700">
//                             <h2 className="text-xl font-semibold text-center text-white">Add New Podcast</h2>
//                         </div>

//                         <div className="flex items-center justify-center bg-gray-100  px-4 w-full rounded-lg">
//                             <form onSubmit={formki.handleSubmit} className="p-6 w-full">
//                                 <div className="grid grid-cols-1 gap-4">


//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             Title
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name='title'
//                                             value={formki.values.title}
//                                             onChange={formki.handleChange}
//                                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             description
//                                         </label>
//                                         <textarea
//                                             type="text"
//                                             name='description'
//                                             value={formki.values.description}
//                                             onChange={formki.handleChange}
//                                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             Upload Image
//                                         </label>
//                                         <input
//                                             // type="file"
//                                             type="text"
//                                             name='image'
//                                             value={formki.values.image}
//                                             onChange={formki.handleChange}
//                                             className="p-2  w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>



//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             author
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name='author'
//                                             value={formki.values.author}
//                                             onChange={formki.handleChange}
//                                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             sourceLink
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name='sourceLink'
//                                             value={formki.values.sourceLink}
//                                             onChange={formki.handleChange}
//                                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="flex items-center space-x-4">
//                                         <label className="text-gray-700 font-medium capitalize w-1/3">
//                                             category
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name='category'
//                                             value={formki.values.category}
//                                             onChange={formki.handleChange}
//                                             className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
//                                             placeholder={`Enter Event Title`}
//                                             required
//                                         />
//                                     </div>


//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//                                 >
//                                     Submit
//                                 </button>

//                                 <div className="p-4 flex justify-end space-x-2">
//                                     <button
//                                         onClick={closeModal}
//                                         className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
//                                     >
//                                         Close
//                                     </button>
//                                 </div>
//                             </form>


//                         </div>


//                     </div>
//                 </div>

//             )}
//         </>


//     );

//     const renderFullPodcastDetails = () => {
//         const item = location.state;
//         if (!item) {
//             return null;
//         }

//         console.log(item, "item");


//         return (
//             <>
//                 <div className="fixed w-10/12 px-4 z-50 top-20 flex items-center  ">
//                     <button onClick={handleBack} className="flex items-center text-lg font-semibold ">

//                         <TbArrowBackUp className="mr-2 text-black size-10" />
//                         Go Back
//                     </button>
//                 </div>



//                 <div className="w-full mt-5 flex justify-start items-center  py-10 px-4">
//                     <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
//                         {/* Video Section */}
//                         <div className="relative">
//                             <video
//                                 className="w-full h-64 md:h-96 object-fill"
//                                 controls
//                                 poster={item.profileImage}
//                             >
//                                 <source
//                                     // src="https://www.w3schools.com/html/mov_bbb.mp4"
//                                     src={item.url}
//                                     type="video/mp4"
//                                 />
//                                 Your browser does not support the video tag.
//                             </video>
//                             <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
//                                 ⏱ {item.duration}
//                             </span>
//                         </div>

//                         {/* Card Content */}
//                         <div className="p-6">
//                             <h2 className="text-2xl font-semibold text-gray-800">
//                                 {/* Introduction to React.js (Video) */}
//                                 {item.title}
//                             </h2>
//                             <p className="text-gray-600 text-sm mt-2">
//                                 {item.description}
//                             </p>
//                             <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
//                                 <span className="bg-gray-200 px-3 py-1 rounded-md">📅 {item.date}</span>
//                                 <span className="bg-gray-200 px-3 py-1 rounded-md">🎥 {item.type}</span>
//                             </div>



//                         </div>
//                     </div>
//                 </div>


//                 <div className="w-80 h-screen bg-gray-100 p-4 shadow-md fixed right-0 top-0 overflow-y-auto mt-16 hidden lg:block">

//                 </div>
//             </>

//         )


//     };






//     return location.state ? renderFullPodcastDetails() : renderPoadcastFedd();
// };

// export default Podcast;


import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import { IoMdMore } from "react-icons/io";
import Navbar from "../../layouts/Navbar";
// import Navbar from "../components/Navbar";

const Podcast = ({ onSearch }) => {
    const [playingMedia, setPlayingMedia] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const openAddModal = () => setIsModalOpen(true);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            image: "",
            author: "",
            category: "",
            sourceLink: "",
        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:9191/user/podcast/savePodcast", values);
                toast.success("Podcast created successfully");
                formik.resetForm();
                closeModal();
            } catch (err) {
                toast.error("Failed to create new podcast");
            }
        }
    });

    const closeModal = () => setIsModalOpen(false);

    const mediaList = [
        {
            title: "Google CEO Sundar Pichai’s I/O 2017 keynote",
            description: "Google CEO Sundar Pichai hosted his second Google I/O as the company’s chief...",
            date: "18 May 2017",
            author: "Sharan_hbd",
            url: "https://www.youtube.com/embed/vWLcyFtni6U",
            profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
            thumbnail: "https://img.youtube.com/vi/vWLcyFtni6U/hqdefault.jpg",
        },
        {
            title: "The Future of AI with GOOGLE CEO (Sundar Pichai)",
            description: "Discussion on AI advancements and their impact...",
            date: "18 May 2017",
            author: "Sharan_hbd",
            url: "https://www.youtube.com/embed/h3M4bm2EveM",
            profileImage: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
        }
    ];

    const filteredMedia = mediaList.filter((media) =>
        media.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

 

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} />
            
            
            <Navbar onSearch={setSearchTerm}  openAddModal={openAddModal} />


            <div className="container mx-auto px-5 py-10">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {filteredMedia.map((item, index) => (
                        <div key={index} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                            <iframe className="w-full h-48" src={item.url} title={item.title} allowFullScreen></iframe>
                            <div className="p-4 flex gap-3">
                                <img className="w-10 h-10 rounded-full" src={item.profileImage} alt={item.author} />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">{item.author}</span> • {item.date}
                                    </p>
                                </div>
                                <IoMdMore size={20} className="text-gray-500 hover:text-gray-700" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-1/3">
                        <div className="p-4 border-b bg-blue-700">
                            <h2 className="text-xl font-semibold text-center text-white">Add New Podcast</h2>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="p-6">
                            {Object.keys(formik.initialValues).map((key) => (
                                <div key={key} className="flex items-center space-x-4 mb-3">
                                    <label className="text-gray-700 font-medium capitalize w-1/3">{key}</label>
                                    <input
                                        type="text"
                                        name={key}
                                        value={formik.values[key]}
                                        onChange={formik.handleChange}
                                        className="p-2 border border-gray-300 rounded-md w-2/3"
                                        required
                                    />
                                </div>
                            ))}
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
                                <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}




        </>
    );
};

export default Podcast;