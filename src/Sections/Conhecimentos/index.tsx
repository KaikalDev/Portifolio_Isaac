import { ContainerConhecimentos } from './styles'
import Tag from '../../Components/Tag'
import iconPython from '../../assets/Img/Python_Icon.png'
import iconJavascript from '../../assets/Img/javascript_Icon.png'
import iconJava from '../../assets/Img/java_ICon.png'
import iconCss from '../../assets/Img/css_Icon.png'
import iconHtml from '../../assets/Img/html_Icon.png'
import iconDjango from '../../assets/Img/django_Icon.png'
import iconGit from '../../assets/Img/git_Icon.png'
import iconApi from '../../assets/Img/api_Icon.png'

const Conhecimento = () => (
  <ContainerConhecimentos id="Conhecimento">
    <div>
      <h2>Conhecimentos</h2>
      <div>
        <h3>Linguagens</h3>
        <ul>
          <li>
            <Tag img={iconPython} alt="Python" />
          </li>
          <li>
            <Tag img={iconJavascript} alt="Python" />
          </li>
          <li>
            <Tag img={iconJava} alt="Python" />
          </li>
          <li>
            <Tag img={iconCss} alt="Python" />
          </li>
        </ul>
        <h3>Habilidades</h3>
        <ul>
          <li>
            <Tag img={iconHtml} alt="Python" />
          </li>
          <li>
            <Tag img={iconDjango} alt="Python" />
          </li>
          <li>
            <Tag img={iconGit} alt="Python" />
          </li>
          <li>
            <Tag img={iconApi} alt="Python" />
          </li>
        </ul>
      </div>
    </div>
  </ContainerConhecimentos>
)

export default Conhecimento
