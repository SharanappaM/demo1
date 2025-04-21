// import React from "react";
// // import { FaCircleXmark } from "@heroicons/react/24/solid";
// import { FaCircleXmark } from "react-icons/fa6";

// const PodcastPlayer = ({ podcast, onClose }) => {
//   if (!podcast) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
//       <div className="w-80 bg-gray-900 text-white h-full p-5 shadow-xl transform transition-transform duration-300">
//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-3 right-3 text-white">
//           <FaCircleXmark className="h-6 w-6" />
//         </button>

//         <h2 className="text-lg font-bold mb-2">{podcast.title}</h2>
//         <p className="text-sm opacity-75">{podcast.description}</p>

//         {/* Player */}
//         <div className="mt-4">
//           {podcast.file_type === "mp3" ? (
//             <audio controls className="w-full">
//               <source src={podcast.file_url} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//           ) : (
//             <video controls className="w-full rounded-lg">
//               <source src={podcast.file_url} type="video/mp4" />
//               Your browser does not support the video element.
//             </video>
//           )}
//         </div>

//         <div className="mt-3 text-sm">
//           <span className="bg-gray-800 px-3 py-1 rounded-full">
//             {podcast.category}
//           </span>
//           <span className="ml-3">⏳ {podcast.duration}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PodcastPlayer;




import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const PodcastPlayer = ({ podcast, onClose, podcasts, onSelect }) => {
  if (!podcast) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Main Player */}
      <div className="w-full md:w-3/4 p-5">
        <button onClick={onClose} className="absolute top-3 left-3 text-white">
          <FaCircleXmark className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-bold mb-2">{podcast.title}</h2>
        <p className="text-sm opacity-75">{podcast.description}</p>

        {/* Media Player */}
        <div className="mt-4">
          {podcast.file_type === "mp3" ? (
            <audio controls className="w-full bg-gray-800 p-3 rounded-lg">
              <source src={podcast.file_url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <video controls className="w-full rounded-lg shadow-lg">
              <source src={podcast.file_url} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          )}
        </div>

        {/* <div className="mt-3 text-sm flex space-x-4">
          <span className="bg-gray-700 px-3 py-1 rounded-full">
            {podcast.category}
          </span>
          <span>⏳ {podcast.duration}</span>
        </div> */}
      </div>

      {/* Sidebar for Playlist */}
      <div className="w-full md:w-1/4 bg-gray-800 p-4 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-3">Next Podcasts</h3>
        {podcasts
          .filter((p) => p.id !== podcast.id)
          .map((p) => (
            <div
              key={p.id}
              onClick={() => onSelect(p)}
              className="flex items-center space-x-3 mb-3 p-2 cursor-pointer hover:bg-gray-700 rounded-lg transition"
            >
              <div className="w-14 h-14 bg-gray-700 flex items-center justify-center text-white font-bold rounded-lg">
                {p.file_type === "mp3" ? "🎵" : "🎥"}
              </div>
              <div>
                <h4 className="text-sm font-semibold">{p.title}</h4>
                <p className="text-xs opacity-75">{p.category} • {p.duration}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PodcastPlayer;

