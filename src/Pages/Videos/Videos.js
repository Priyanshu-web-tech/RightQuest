import React from 'react';
import './Videos.css';
import { FaPlay } from 'react-icons/fa'; // Import a play icon from react-icons

const Videos = () => {
  const videoData = [
    {
      title: 'Video 1 Title',
      description: 'Introduction to Child Rights',
      videoLink: 'https://www.youtube.com/embed/y4udqAY2Bqc?si=AYWfXrypjytrTMgW',
    },
    {
      title: 'Video 2 Title',
      description: 'Child Rights Advocacy',
      videoLink: 'https://www.youtube.com/embed/HCYLdtug8sk?si=PjUiwQuPJ9l4lDbj',
    },
    {
      title: 'Video 3 Title',
      description: 'Child Rights Education',
      videoLink: 'https://www.youtube.com/embed/V1BFLitBkco?si=t5DLu-QVuhhfSvVk',
    },
  ];

  return (
    <div className='outer'>
    <div className="videos-container">
      <h1 className="videos-heading">Explore Child Rights Videos</h1>
      <div className="video-sections">
        {videoData.map((video, index) => (
          <div className={`video-section ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
            <div className="video">
              <iframe
                src={video.videoLink}
                title={`Child Rights Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
            <div className="text">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Videos;
