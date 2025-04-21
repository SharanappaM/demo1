


import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { MdEvent } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineAddBusiness } from "react-icons/md";

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaLink } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import { IoMdMore } from 'react-icons/io';

const EventList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenForViewFullEvent, setIsModalOpenForViewFullEvent] = useState(false);
  const [eventList, setEventList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalForViewFullEvent = () => {
    setIsModalOpenForViewFullEvent(true);
  };

  // Function to close the modal
  const closeModalForViewFullEvent = () => {
    setIsModalOpenForViewFullEvent(false);
  };





  const [lastEventId, setLastEventId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if more events are available
  const observerRef = useRef(null);

  const fetchEvents = (eventId) => {
    if (loading || !hasMore) return; // Prevent fetching if already loading or no more data

    setLoading(true);
    axios
      .post(`http://localhost:9191/user/event/fetchTenEvent`, { eventId: eventId })
      .then((res) => {
        if (res.data.length > 0) {
          setEventList((prev) => [...prev, ...res.data]);
          setLastEventId(res.data[res.data.length - 1].eventId); // Update last event ID
        } else {
          setHasMore(false); // No more events, stop fetching
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchEvents(0); // Load initial events
  }, []);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && lastEventId !== null && !loading) {
          fetchEvents(lastEventId);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [lastEventId, loading, hasMore]);




  const formki = useFormik({
    initialValues: {
      eventTitle: null,
      description: null,
      image: null,
      address: null,
      state: null,
      city: null,
      country: null,
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      organizer: null,
      category: null,
      sourceLink: null,
    },
    onSubmit: (values) => {

      const startDateWithTime = values.startDate;
      const startDateObj = new Date(startDateWithTime);

      // Extract the date in `DD-MM-YYYY` format
      const date = startDateObj.toLocaleDateString("en-GB"); // "04/02/2025"
      const formattedStartDate = date.replace(/\//g, "-"); // "04-02-2025"

      // Extract the time in `hh:mm AM/PM` format
      const formattedStartTime = startDateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Output
      console.log("Date =", formattedStartDate);
      console.log("Time =", formattedStartTime);


      const endDateWithTime = values.endDate;
      const endtDateObj = new Date(endDateWithTime);

      // Extract the date in `DD-MM-YYYY` format
      const endDate = endtDateObj.toLocaleDateString("en-GB"); // "04/02/2025"
      const formattedEndtDate = endDate.replace(/\//g, "-"); // "04-02-2025"

      // Extract the time in `hh:mm AM/PM` format
      const formattedEndTime = endtDateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Output
      console.log("Date =", formattedEndtDate);
      console.log("Time =", formattedEndTime);

      const updatedFormData = {
        ...values,
        startDate: formattedStartDate,
        endDate: formattedEndtDate,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
      }

      // axios.post("http://34.45.179.225:8080/employee/news/saveNewsFeed", values)
      // http://localhost:5173/events
      axios.post(`http://localhost:9191/user/event/createEvent`, updatedFormData)

        .then(res => {
          console.log(res.data);
          toast.success("Event created Successfully")
          closeModal();

          formki.setFieldValue('title', "");
          formki.setFieldValue('content', "");
          formki.setFieldValue('author', "");
          formki.setFieldValue('source', "");
          formki.setFieldValue('category', "");

          formki.setFieldValue('url', "");


        }).catch(err => {
          console.log(err);
          toast.error("News created failed")

        })
    }
  })



  // Filter media based on search input
  const filteredMedia = eventList.filter((media) =>
    media.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (

    <div>
      <ToastContainer position="bottom-right" autoClose={5000} />


      <div className="container mx-auto px-5 py-7">

        {/* <div style={{ marginTop: "5.1px" }} className="fixed lg:top-16 lf:left-64 sm:top-2  lg:w-3/5 bg-slate-200 z-50">
          <div className="px-4 py-2 flex justify-center flex-1">
            <input
              type="text"
              placeholder="🔍 Search events..."
              className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="w-44 border-2  border-blue-700 ml-5" onClick={openModal}>Add Event</button>
          </div>
        </div>


        <div className="mt-6 "></div> */}


        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {filteredMedia.map((item, index) => (
            <div
              onClick={() => setIsModalOpenForViewFullEvent(true)}
              key={index}
              className=" w-[270px] cursor-pointer max-w-lg mx-auto  shadow-lg bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div
                className="relative  h-48 bg-contain bg-center"
                style={{ backgroundImage: 'url("https://images.yourstory.com/cs/2/1a70b4f0170611edbdd8b5d28d859895/Untitleddesign-2025-01-17T145044-1737105664764.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600" >
                    <FaCalendarAlt className="mr-3 text-xl" />
                    <span className="text-xs font-bold">
                      {`Start: ${item.startDate} | End: ${item.endDate}`}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">{item.eventTitle}</h2>
                  <h2 className="">{item.description.slice(0, 50)}...</h2>
                  {/* item.content. */}







                </div>
              </div>
            </div>
          ))}



          {hasMore && (
            <div ref={observerRef} className="h-10 w-full flex justify-center items-center">
              {loading && <p>Loading more events...</p>}
            </div>
          )}


          {!hasMore && (
            <p className="text-center text-gray-500 col-span-full">No more events to load.</p>
          )}
        </div>





      </div>





      {isModalOpen && (


        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full">
            <div className="p-4 border-b bg-blue-700">
              <h2 className="text-xl font-semibold text-center text-white">Register Event</h2>
            </div>

            <div className="flex items-center justify-center bg-gray-100  px-4 w-full rounded-lg">
              <form onSubmit={formki.handleSubmit} className="p-6 w-full">
                <div className="grid grid-cols-2 gap-4">


                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      Event Title
                    </label>
                    <input
                      type="text"
                      name='eventTitle'
                      value={formki.values.eventTitle}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      startDate&Time
                    </label>
                    <input
                      type="datetime-local"
                      name='startDate'
                      value={formki.values.startDate}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      description
                    </label>
                    <textarea
                      type="text"
                      name='description'
                      value={formki.values.description}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      endDate&time
                    </label>
                    <input
                      type="datetime-local"
                      name='endDate'
                      value={formki.values.endDate}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      image
                    </label>
                    <input
                      type="file"
                      name='image'
                      value={formki.values.image}
                      onChange={formki.handleChange}
                      className="p-2  w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      address
                    </label>
                    <input
                      type="text"
                      name='address'
                      value={formki.values.address}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      state
                    </label>
                    <input
                      type="text"
                      name='state'
                      value={formki.values.state}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      organizer
                    </label>
                    <input
                      type="text"
                      name='organizer'
                      value={formki.values.organizer}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      city
                    </label>
                    <input
                      type="text"
                      name='city'
                      value={formki.values.city}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      category
                    </label>
                    <input
                      type="text"
                      name='category'
                      value={formki.values.category}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      country
                    </label>
                    <input
                      type="text"
                      name='country'
                      value={formki.values.country}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-medium capitalize w-1/3">
                      sourceLink
                    </label>
                    <input
                      type="text"
                      name='sourceLink'
                      value={formki.values.sourceLink}
                      onChange={formki.handleChange}
                      className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 w-2/3"
                      placeholder={`Enter Event Title`}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                  Submit
                </button>

                <div className="p-4 flex justify-end space-x-2">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </form>


            </div>


          </div>
        </div>

      )}
      {isModalOpenForViewFullEvent && (


        <div className="fixed inset-0  bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full">



            <div>
              <div className="relative w-full lg:h-72 bg-cover bg-center" style={{ backgroundImage: 'url("C:\\fakepath\\Logo.png")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl font-bold">RSP Solutions 25</h2>
                </div>

                <div className='flex justify-end relative self-end'>
                  <MdCancel onClick={closeModalForViewFullEvent} className='size-7 text-red-600 m-2 cursor-pointer' />
                </div>

              </div>
              <div className="p-4 space-y-4">



                <p className="text-gray-700 text-sm  overflow-hidden text-ellipsis">
                  Remote SIM provisioning (RSP) solutions for eSIMs allow users to manage and switch SIM profiles remotely. This can be done without physically changing the SIM card. How RSP works
                  RSP uses embedded SIMs (eSIMs) and integrated SIMs (iSIMs) to manage device identity RSP Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam quaerat ea, suscipit maiores omnis? Cumque non id corrupti sit eaque reiciendis hic magni similique eius, nostrum rerum, provident est!
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-3 text-xl" />
                    <span className="text-sm">Plot No 32, 3rd Cross, Dasarahalli Main Rd, Balaji Layout, Kempapura</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-3 text-xl" />
                    <span className="text-sm">{`Start: 01-01-2025 | End: 10-01-2025`}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-3 text-xl" />
                    <span className="text-sm">{`Time: 10:00 AM - 6:00 PM`}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MdOutlineAddBusiness className="mr-3 text-xl" />
                
                    <a href="https://www.travercel.com/" className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">
                    Register Event
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-b-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Organized by : PRAVIN</span>
                  <span className="text-gray-500 text-sm">Category: category</span>
                </div>
              </div>
            </div>


            {/* <div className="p-4 flex justify-end space-x-2">
              <button
                onClick={closeModalForViewFullEvent}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
              >
                Close
              </button>
            </div> */}


          </div>
        </div>

      )}








    </div>

  );
};

export default EventList;