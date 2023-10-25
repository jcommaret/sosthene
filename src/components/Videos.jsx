function Videos() {
  return (
    <div id="videocontainer">
      <ul class="bxSlider">
        <li class="video">
          <iframe
            src="https://player.vimeo.com/video/80557897?color=ffffff&amp;autoplay=0"
            width="500"
            height="281"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </li>
        <li class="video">
          <iframe
            src="https://player.vimeo.com/video/102678598?color=ffffff&amp;autoplay=0"
            width="500"
            height="281"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </div>
  )
}
export default Videos
