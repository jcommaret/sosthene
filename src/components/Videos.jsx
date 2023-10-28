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
      <div className="video">
        <iframe
          title="video 1"
          src="https://player.vimeo.com/video/80557897?color=ffffff&amp;autoplay=0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video">
        <iframe
          title="video 2"
          src="https://player.vimeo.com/video/102678598?color=ffffff&amp;autoplay=0"
        ></iframe>
      </div>
    </Slider>
  )
}
