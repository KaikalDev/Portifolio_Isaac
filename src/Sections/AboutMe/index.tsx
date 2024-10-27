import { ContainerAboutMe } from './styles'
import imgAboutMe from '../../assets/Img/imgAboutMe.png'
import Foto from '../../assets/Img/Foto1.jpg'

const AboutMe = () => (
  <ContainerAboutMe id="AboutMe">
    <div>
      <h1>Olá, Meu nome é</h1>
      <div>
        <h2>ISAAC</h2>
      </div>
      <p>
        Me chamo Isaac, estou atualmente no segundo período de Análise e
        Desenvolvimento de Sistemas (ADS) na UEPB. O meu foco é ser um
        desenvolvedor Full-Stack, então estou constantemente buscando
        conhecimentos tanto na parte do back-end com python e no front-end com a
        tríade HTML, CSS e JavaScript. Além disso, tenho inglês avançado e estou
        disposto a aprender mais e mais sobre diferentes ferramentas através de
        projetos.
      </p>
      <div>
        <a
          href="https://docs.google.com/document/d/1T036iTLy18ISHXHW2GxBGDvPjrTDWJ_tt84WuaLyebo/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Currículo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
        </a>
      </div>
    </div>
    <div>
      <img src={imgAboutMe} alt="img" />
      <img className="Foto" src={Foto} alt="Foto" />
    </div>
  </ContainerAboutMe>
)

export default AboutMe
