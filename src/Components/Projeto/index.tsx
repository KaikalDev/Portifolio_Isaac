import { ProjetoContainer } from './styles'

const Projeto = ({
  description,
  img,
  linkRepository,
  title,
  linkSite
}: Projects) => (
  <ProjetoContainer>
    <img src={img} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <a target="_blank" href={linkRepository} rel="noreferrer">
          Visite o repositorio
        </a>
        {linkSite && (
          <a target="_blank" href={linkSite} rel="noreferrer">
            Visite o site
          </a>
        )}
      </div>
    </div>
  </ProjetoContainer>
)

export default Projeto
