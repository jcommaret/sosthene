import cat from "../assets/tcc.png"

function Menu() {
  return (
    <div class="menu">
      <ul>
        <li>
          <a href="#bio">Biographie</a>
        </li>
        <li>
          <a href="https://www.facebook.com/sosthene.music">Facebook</a>
        </li>
        <li>
          <a href="https://soundcloud.com/sosthene-music">Soundcloud</a>
        </li>
        <li>
          <a href="https://play.spotify.com/artist/0IJN2BMJrNH9VhJyKILOPy">
            Spotify
          </a>
        </li>
        <li>
          <a href="https://itunes.apple.com/fr/album/early-early-ep/id494192212">
            iTunes
          </a>
        </li>
        <li class="cat">
          <a href="http://www.thecreative.cat">
            <img alt="Go to thecreative cat" src={cat} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
