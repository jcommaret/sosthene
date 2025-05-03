import Slider from "react-slick"

import { ContentDataType, Video } from '../../types';
import contentData from '../../assets/data/content.json';


export default function Videos() {
  const content: ContentDataType = contentData || {
  };

  // Base URL for assets, handles deployment subdirectory like on GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="video">
      <Slider {...settings}>
          {content?.videos?.map((video: Video, index: number) => {
            // Construct the full URL by prepending the base URL
            // Remove leading slash from video.url if present to avoid double slashes
            const videoSrc = `${baseUrl}${video.url.startsWith('/') ? video.url.substring(1) : video.url}`;
            return <video key={index} src={videoSrc} controls></video>
        })}
      </Slider>
    </div>
  )
}
