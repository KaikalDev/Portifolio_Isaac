import { ContainerExperience } from './styles'
import Foto1 from '../../assets/Img/isaac3.jpg'
import Foto2 from '../../assets/Img/isaac4.jpg'
import TimeLine from '../../Components/TimeLina'

const Experiences = () => (
  <ContainerExperience id="Experiences">
    <h2>Experiências</h2>
    <div>
      <TimeLine />
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
