import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";



const FullNewsDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newsFeedList = [location.state];
  if (!newsFeedList) {
    navigate("/news");
    return null;
  }

  return (
    <div>


      {/* <div className="fixed w-10/12 mt-1  bg-gray-800 text-white py-3 px-4 shadow-md z-50 flex items-center"> */}
      <div className="fixed w-10/12 mt-1 py-3 px-4  z-50 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-lg font-semibold"
        >
          <FaArrowLeft className="mr-2 text-black" />
          Go Back
        </button>
      </div>
      <div className="flex-1 p-4 w-full h-fit">


        {
          newsFeedList.map((item, index) => (
            <div className=" mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">

              <div>
                <img className="rounded-t-lg w-full h-64 object-cover" src={`data:image/jpeg;base64,${item.imageUrl}`} alt='' />
              </div>
              <div className="p-5">

                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </div>

                <div className="flex items-center mb-2">
                  <div>
                    <img
                      className="rounded-full h-11 w-11 object-cover"
                      src="https://economictimes.indiatimes.com/icons/etfavicon.ico"
                      alt="Source Logo"
                    />
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

                  {item.content}
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
                    <IoShareSocialOutline className="mr-2 size-7  " />
                  </div>

                  <div className="flex items-center cursor-pointer">
                    <IoIosInformationCircleOutline className="mr-2 size-8" />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600"
                    >
                      Source
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FullNewsDetailsPage

