import { ContainerExperience } from './styles'
import iconFlech from '../../assets/Img/arrom.png'
import formatura from '../../assets/Img/formatura.png'
import globo from '../../assets/Img/icons8-globo-100.png'
import programa from '../../assets/Img/icons8-programa-100.png'
import Foto1 from '../../assets/Img/isaac3.jpg'
import Foto2 from '../../assets/Img/isaac4.jpg'

const Experiences = () => (
  <ContainerExperience>
    <h2>Experiências</h2>
    <div>
      <div className="DivTimeLine">
        <div className="TimeLine">
          <div className="Chevron__borda">
            <div className="Chevron">2021-2023</div>
          </div>
          <div className="Chevron__borda">
            <div className="Chevron">2023</div>
          </div>
          <div className="Chevron__borda">
            <div className="Chevron">2024</div>
          </div>
        </div>
        <div className="Experiences">
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
      </div>
      <div className="Fotos">
        <div className="Foto">
          <img src={Foto1} alt="" />
        </div>
        <div className="Foto">
          <img src={Foto2} alt="" />
        </div>
      </div>
    </div>
  </ContainerExperience>
)

export default Experiences
