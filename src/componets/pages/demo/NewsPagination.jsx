// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import { FaClock, FaUser, FaLink } from "react-icons/fa";

// import { FaRegCommentDots } from "react-icons/fa";
// import { FaRegBookmark } from "react-icons/fa6";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { IoIosInformationCircleOutline } from "react-icons/io";
// import axios from 'axios';









// const NewsPagination = () => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [newsFeedList, setNewsFeedList] = useState([])
//     const [currPage, setCurrPage] = useState(1);
   
//     // Fetch news feed from the API
//     const fetchNewsFeed = () => {
//         // axios.get("http://localhost:8080/user/news/fetchNewsFeed")
//         axios.get(`http://localhost:8080/user/news/fetchNewsFeed?page=${currPage}&size=10`)
//             .then(res => {
//                 setNewsFeedList(res.data);
//             }).catch(err => {
//                 console.log(err);
//             })
//     };

//     useEffect(() => {

//         fetchNewsFeed();  // Fetch news feed if not viewing a specific article

//     }, []);


//     return (
//         <div>
//             <div className="flex-1 p-4 w-full lg:w-2/3 h-fit">
//                 {newsFeedList.map((item, index) => (
//                     <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
//                         <div className="cursor-pointer" >
//                             <img className="rounded-t-lg w-full h-64 object-cover" src={`data:image/jpeg;base64,${item.imageUrl}`} alt='' />
//                         </div>
//                         <div className="p-5">
//                             <div className="cursor-pointer" >
//                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
//                             </div>
//                             <div className="flex items-center mb-2">
//                                 <div>
//                                     <img className="rounded-full h-11 w-11 object-cover" src="https://economictimes.indiatimes.com/icons/etfavicon.ico" alt="Source Logo" />
//                                 </div>
//                                 <div className="ml-3">
//                                     <p className="text-lg font-medium">{item.source}</p>
//                                     <div className="flex items-center text-base text-gray-500">
//                                         <FaClock className="mr-1" />
//                                         <span>{item.timeStamp}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="mb-4 text-gray-700 dark:text-gray-400">
//                                 {isExpanded ? item.content : `${item.content.slice(0, 600)}...`}
//                                 {item.content.length > 150 && (
//                                     <span className="text-blue-600 font-bold cursor-pointer" >Read more</span>
//                                 )}
//                             </p>
//                             <div className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded-md inline-block mb-5">
//                                 {item.category}
//                             </div>
//                             <div className="flex items-center justify-between text-gray-500 text-sm">
//                                 <div className="flex items-center cursor-pointer">
//                                     <FaRegBookmark className="mr-2 size-6" />
//                                 </div>
//                                 <div className="flex items-center cursor-pointer">
//                                     <FaRegCommentDots className="mr-2 size-8" />
//                                 </div>
//                                 <div className="flex items-center cursor-pointer">
//                                     <IoShareSocialOutline className="mr-2 size-7" />
//                                 </div>
//                                 <div className="flex items-center cursor-pointer">
//                                     <IoIosInformationCircleOutline className="mr-2 size-8" />
//                                     <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
//                                         Source
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default NewsPagination








// import React, { useRef, useEffect, useState } from "react";
// import axios from "axios";

// function ListingPage() {
//   const listInnerRef = useRef();
//   const [currPage, setCurrPage] = useState(1);
//   const [userList, setUserList] = useState([]);
//   const [lastList, setLastList] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=5`
//         );
//         if (!response.data.data.length) {
//           setLastList(true);
//           setLoading(false);
//           return;
//         }
//         setUserList((prevUserList) => [...prevUserList, ...response.data.data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };
    
//     if (!lastList) {
//       fetchData();
//     }
//   }, [currPage, lastList]);

//   const onScroll = () => {
//     if (listInnerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
//       if (scrollTop + clientHeight >= scrollHeight - 10) {
//         setCurrPage((prevPage) => prevPage + 1);
//       }
//     }
//   };

//   return (
//     <div
//       onScroll={onScroll}
//       ref={listInnerRef}
//       style={{ height: "100vh", overflowY: "auto" }}
//     >
//       {userList.map((item, index) => (
//         <div
//           key={index}
//           style={{
//             marginTop: "40px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//           }}
//         >
//           <p>Name: {item.name}</p>
//           <p>Trips: {item.trips} + {index}</p>
//         </div>
//       ))}
//       {loading && <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>}
//       {lastList && <p style={{ textAlign: "center", marginTop: "20px" }}>No more data present</p>}
//     </div>
//   );
// }

// export default ListingPage;








import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import { FaClock, FaUser, FaLink } from "react-icons/fa";

import { FaRegCommentDots } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

function ListingPage() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(5);
  const [lastCurrPage, setLastCurrPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//         //   `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=5`
//           `http://34.45.179.225:8080/user/news/fetchNewsFeed??limit=5&offset=${lastCurrPage}`
//         //   ?limit=$10&offset=0
//         );
//         if (!response.data.length) {
//           setLastList(true);
//           setLoading(false);
//           return;
//         }
//         setUserList((prevUserList) => [...prevUserList, ...response.data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };
    
//     if (!lastList) {
//       fetchData();
//     }
//   }, [lastCurrPage]);


useEffect(() => {
    let isCancelled = false; // Track if the effect is canceled
  
    const fetchData = async () => {
      if (loading1) return; // Prevent multiple API calls when already fetching
  
      setLoading1(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/user/news/fetchNewsFeed?limit=5&offset=${lastCurrPage}`
        );
  
        if (!isCancelled) {
          if (!response.data.length) {
            setLastList(true);
          } else {
            setUserList((prevUserList) => [...prevUserList, ...response.data]);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  
      if (!isCancelled) {
        setLoading1(false);
      }
    };
  
    if (!lastList) {
      fetchData();
    }
  
    return () => {
      isCancelled = true; // Cleanup function to prevent unwanted state updates
    };
  }, [lastCurrPage]);
  
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading1) {
        setTimeout(() => {
          setLastCurrPage((prevPage) => prevPage + 5);
        }, 300); // Delay by 300ms to prevent double execution
      }
    }
  };
  

  return (
    <div
    className="p-5"
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {userList.map((item, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
        <div className="cursor-pointer">
            <img className="rounded-t-lg w-full h-64 object-cover" src={`data:image/jpeg;base64,${item.imageUrl}`} alt='' />
        </div>
        <div className="p-5">
            <div className="cursor-pointer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </div>
            <div className="flex items-center mb-2">
                <div>
                    <img className="rounded-full h-11 w-11 object-cover" src="https://economictimes.indiatimes.com/icons/etfavicon.ico" alt="Source Logo" />
                </div>
                <div className="ml-3">
                    <p className="text-lg font-medium">{item.source}</p>
                    <div className="flex items-center text-base text-gray-500">
                        <FaClock className="mr-1" />
                        <span>{item.timeStamp}</span>
                    </div>
                </div>
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-400">
                {isExpanded ? item.content : `${item.content.slice(0, 600)}...`}
                {item.content.length > 150 && (
                    <span className="text-blue-600 font-bold cursor-pointer">Read more</span>
                )}
            </p>
            <div className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded-md inline-block mb-5">
                {item.category}
            </div>
            <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center cursor-pointer">
                    <FaRegBookmark className="mr-2 size-6" />
                </div>
                <div className="flex items-center cursor-pointer">
                    <FaRegCommentDots className="mr-2 size-8" />
                </div>
                <div className="flex items-center cursor-pointer">
                    <IoShareSocialOutline className="mr-2 size-7" />
                </div>
                <div className="flex items-center cursor-pointer">
                    <IoIosInformationCircleOutline className="mr-2 size-8" />
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        Source
                    </a>
                </div>
            </div>
        </div>
    </div>
      ))}
      {loading1 && <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>}
      {lastList && <p style={{ textAlign: "center", marginTop: "20px" }}>No more data present</p>}
    </div>
  );
}

export default ListingPage;