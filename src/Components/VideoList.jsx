// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoList = () => {
  const apiKey = 'AIzaSyCP85AhrvlXuQcfhSjauwueVFs5LnKXpUo';
  const channelId = 'UCTvHWSfBZgtxE4sILOaurIQ';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <div id='schedule' className="container mx-auto py-8 bg-gray-100">
      <h1 className='text-end pr-5 md:pr-[150px] text-4xl font-bold text-[#26C6FF]'>Schedule</h1>
      <h2 className='text-end pb-8 pr-5 md:pr-[150px] text-2xl font-semibold text-[#FC8054]'>Upcoming and Archived Streams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white p-4 rounded-lg shadow-md mb-4 hover:scale-105">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center ">
                <div>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-58 h-42 object-cover mb-4"
                  />
                </div>
                <div>
                  <h2 className=" font-semibold">{video.snippet.title}</h2>
                  <p className="text-sm text-gray-600">{video.snippet.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

  

export default VideoList;