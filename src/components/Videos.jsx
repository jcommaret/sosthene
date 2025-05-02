import Slider from "react-slick"

export default function Videos() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div className="video full-width-video">
        <iframe
          title="video 1"
          src="https://player.vimeo.com/video/80557897?color=ffffff&amp;autoplay=0"
          className="full-width-video"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video full-width-video">
        <iframe
          title="video 2"
          src="https://player.vimeo.com/video/877547033color=ffffff&amp;autoplay=0"
          className="full-width-video"
        ></iframe>
      </div>
    </Slider>
  )
}
