import iconFlech from '../../assets/Img/arrom.png'
import formatura from '../../assets/Img/formatura.png'
import globo from '../../assets/Img/icons8-globo-100.png'
import programa from '../../assets/Img/icons8-programa-100.png'
import { ContainerTimeLine, Polygon } from './styles'

const TimeLine = () => (
  <ContainerTimeLine>
    <div>
      <Polygon>
        <div>2021-2023</div>
      </Polygon>
      <Polygon>
        <div>2023</div>
      </Polygon>
      <Polygon>
        <div>2024</div>
      </Polygon>
    </div>
    <div>
      <ul>
        <li>
          <i>
            <img src={iconFlech} alt="flecha" />
          </i>
          <div>
            <i>
              <img src={formatura} alt="icon" />
            </i>
            <p>Conclusão do ensino medio</p>
          </div>
        </li>
        <li>
          <i>
            <img src={iconFlech} alt="flecha" />
          </i>
          <div>
            <i>
              <img src={globo} alt="icon" />
            </i>
            <p>Intercambio para o País de Gales</p>
          </div>
        </li>
        <li>
          <i>
            <img src={iconFlech} alt="flecha" />
          </i>
          <div>
            <i>
              <img src={programa} alt="icon" />
            </i>
            <p>Começo do curso de Análise e Desenvolvimento de Sistemas</p>
          </div>
        </li>
      </ul>
    </div>
  </ContainerTimeLine>
)

export default TimeLine
