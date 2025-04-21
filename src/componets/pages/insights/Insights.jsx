

import React, { useEffect, useState } from 'react'
import { FaClock, FaUser, FaLink } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Insights = () => {
  const [newsFeedList, setNewsFeedList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);






  const updates = [
    {
      id: 1,
      title: 'New feature added',
      description: 'We have added a new analytics feature to the dashboard.',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Maintenance Scheduled',
      description: 'System maintenance is scheduled for Saturday at 12:00 AM.',
      time: '1 day ago',
    },
    {
      id: 3,
      title: 'New User Guide',
      description: 'A new user guide is now available in the resources section.',
      time: '3 days ago',
    },
    {
      id: 4,
      title: 'New User Guide',
      description: 'A new user guide is now available in the resources section.',
      time: '3 days ago',
    },
  ];

  // Fetch news feed from the API
  const fetchNewsFeed = () => {
    axios.get("http://localhost:8080/user/info/fetchInfoFeed")
    // axios.get("http://34.45.179.225:8080/user/info/fetchInfoFeed")
      .then(res => {
        setNewsFeedList(res.data);
      }).catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    if (!location.state) {
      fetchNewsFeed();  // Fetch news feed if not viewing a specific article
    }
  }, [location.state]);

  // View full details of an article
  const handleViewDetails = (item) => {
    navigate("/insights", { state: item });
  };

  // Navigate back
  const handleBack = () => {
    navigate("/insights");
  };

  // Render news feed list
  const renderNewsFeed = () => (
    <div className="flex flex-row justify-between ">
      <div className="flex-1 p-4 w-full lg:w-2/3 h-fit">
        {newsFeedList.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">

            <div className="w-full max-w-5xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 sec
                className="rounded-t-lg"
              >
                {item.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="rounded-t-lg w-full h-64 object-cover"
                      src={`data:image/jpeg;base64,${image}`}
                      alt="News"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-5">
              <div className="cursor-pointer" onClick={() => handleViewDetails(item)}>
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
                  <span className="text-blue-600 font-bold cursor-pointer" onClick={() => handleViewDetails(item)}>Read more</span>
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
      </div>

      {/* Latest Insights Section */}
      <aside className="w-full lg:w-1/3 p-2 bg-slate-200 hidden lg:block sticky top-0 h-fit">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Events</h2>
        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update.id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-104 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-blue-800">{update.title}</h3>
              <p className="text-sm text-gray-600">{update.description}</p>
              <span className="text-xs text-gray-500">{update.time}</span>
            </div>
          ))}
        </div>
        <div onClick={() => navigate("/events")} className="bg-blue-700 w-full text-white text-sm font-medium px-6 py-2 rounded-md inline-block mt-3 text-center cursor-pointer">
          View More
        </div>
      </aside>
     

    </div>
  );

  // Render full news details page
  const renderFullNewsDetails = () => {
    const item = location.state;
    if (!item) {
      return null;
    }

    return (
      <div>
        <div className="fixed w-10/12 px-4 z-50 top-20 flex items-center">
          <button onClick={handleBack} className="flex items-center text-lg font-semibold">
            <FaArrowLeft className="mr-2 text-black" />
            Go Back
          </button>
        </div>
        <div className="flex-1 p-4 w-3/4 h-fit mt-16">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
            {/* <img className="rounded-t-lg w-full h-64 object-cover" src={`data:image/jpeg;base64,${item.imageUrl}`} alt='' /> */}

            <div className="w-full max-w-6xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 sec
                className="rounded-t-lg"
              >
                {item.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="rounded-t-lg w-full h-64 object-cover"
                      src={`data:image/jpeg;base64,${image}`}
                      alt="News"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
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
              <p className="mb-4 text-gray-700 dark:text-gray-400">{item.content}</p>
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
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return location.state ? renderFullNewsDetails() : renderNewsFeed();
};

export default Insights;

