import Header from "./Header"
import Menu from "./Menu"
import Videos from "./Videos"

function Content() {
  return (
    <div id="all">
      <Videos />
      <Header />
      <Menu />

      <div id="bio">
        <h1 class="title">Biographie</h1>
        <p class="text">
          La musique est l'art consistant à arranger et à ordonner ou
          désordonner sons et silences au cours du temps : le rythme est le
          support de cette combinaison dans le temps, la hauteur, celle de la
          combinaison dans les fréquences… Elle est donc à la fois une création
          (une œuvre d'art), une représentation et aussi un mode de
          communication. Elle utilise certaines règles ou systèmes de
          composition, des plus simples aux plus complexes (souvent les notes de
          musique, les gammes et autres). Elle peut utiliser des objets divers,
          le corps, la voix, mais aussi des instruments de musique spécialement
          conçus, et de plus en plus tous les sons (concrets, de synthèses,
          abstraits, etc.). La musique est évanescente, elle n'existe que dans
          l'instant de sa perception qui doit en reconstituer son unité dans la
          durée. Elle a existé dans toutes les sociétés humaines, depuis la
          Préhistoire. Elle est à la fois forme d'expression individuelle
          (notamment l'expression des sentiments), source de rassemblement
          collectif et de plaisir (fête, chant, danse) et symbole d'une
          communauté ou d'une nation (hymne national, style musical officiel,
          musique religieuse, musique militaire).
        </p>
      </div>
    </div>
  )
}

export default Content
