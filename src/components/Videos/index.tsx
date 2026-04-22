import { useState } from 'react';
import { ContentDataType, Video } from '../../types';
import contentData from '../../assets/data/content.json';


export default function Videos() {
  const content: ContentDataType = contentData || {
    videos: []
  };

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Base URL for assets, handles deployment subdirectory like on GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === content.videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? content.videos.length - 1 : prevIndex - 1
    );
  };

  if (content.videos.length === 0) {
    return <div className="video">No videos available</div>;
  }

  const currentVideo = content.videos[currentVideoIndex];
  const videoSrc = `${baseUrl}${currentVideo.url.startsWith('/') ? currentVideo.url.substring(1) : currentVideo.url}`;
  const thumbnailSrc = currentVideo.thumbnail ? `${baseUrl}${currentVideo.thumbnail.startsWith('/') ? currentVideo.thumbnail.substring(1) : currentVideo.thumbnail}` : null;

  return (
    <div className="video-fullscreen">
      {!showVideo ? (
        <div className="single-thumbnail" onClick={() => setShowVideo(true)}>
          {thumbnailSrc ? (
            <img
              src={thumbnailSrc}
              alt={`Thumbnail for video ${currentVideoIndex + 1}`}
              className="video-thumbnail"
            />
          ) : (
            <div className="video-placeholder">Click to play video</div>
          )}
          <div className="thumbnail-overlay">
            <span>Click to play video</span>
          </div>
        </div>
      ) : (
        <div className="video-container">
          <video src={videoSrc} controls className="video-player" autoPlay></video>
        </div>
      )}
      <button onClick={prevVideo} className="slider-button prev" aria-label="Previous video">←</button>
      <button onClick={nextVideo} className="slider-button next" aria-label="Next video">→</button>
      <div className="video-pagination">
        {currentVideoIndex + 1} / {content.videos.length}
      </div>
    </div>
  )
}
