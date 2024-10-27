import imgYourQuote from '../../assets/Img/yourQuote.jpg'
import imgApiRest from '../../assets/Img/API REST.jpg'
import imgToDoList from '../../assets/Img/To-do list.jpg'
import Projeto from '../../Components/Projeto'
import { ContainerProjects } from './styles'

const Projetos: Projects[] = [
  {
    img: imgYourQuote,
    title: 'Your Quote',
    description:
      'YourQuote é uma plataforma que permite a cada usuário gerenciar suas citações favoritas de forma personalizada e organizada. Com uma interface intuitiva e fácil de usar, os usuários podem salvar, editar e categorizar suas citações, mantendo tudo acessível em uma conta segura. Ideal para escritores, leitores e todos que desejam guardar e compartilhar suas palavras e inspirações preferidas.',
    linkRepository:
      'https://github.com/isaac451-andrade/Site-de-gerenciamento-de-citacoes'
  },
  {
    img: imgApiRest,
    title: 'API REST',
    description:
      'Este site disponibiliza uma API REST robusta, desenvolvida com o framework Django, que facilita o consumo de dados e a integração de funcionalidades. Ideal para desenvolvedores e empresas, nossa API é projetada para ser escalável e segura, suportando operações confiáveis ​​em tempo real.',
    linkRepository:
      'https://github.com/isaac451-andrade/API-REST-Site-que-permite-consumir-uma-api-Rest-feita-em-Django'
  },
  {
    img: imgToDoList,
    title: 'To-do List',
    description:
      'To-do List é uma plataforma completa para gerenciamento de tarefas, projetada para ajudar os usuários a organizar e priorizar seus afazeres de forma prática e eficiente. Com uma interface intuitiva, é possível criar, editar e categorizar tarefas, além de acompanhar o progresso e estabelecer prazos. Ideal para quem busca aumentar a produtividade e manter o foco nas atividades diárias.',
    linkRepository: 'https://github.com/isaac451-andrade/To-do-list-WebSite',
    linkSite: 'https://to-do-list-web-site.vercel.app/'
  }
]

const Projects = () => (
  <ContainerProjects id="Projects">
    <h2>Projetos</h2>
    <ul>
      {Projetos.map((project) => (
        <div key={project.title}>
          <li>
            <Projeto
              img={project.img}
              title={project.title}
              description={project.description}
              linkRepository={project.linkRepository}
              linkSite={project.linkSite}
            />
          </li>
          <hr />
        </div>
      ))}
    </ul>
  </ContainerProjects>
)

export default Projects
