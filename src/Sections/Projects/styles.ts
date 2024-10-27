import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-inline: 10%;

  h2 {
    font-size: 48px;
    text-align: end;
    padding-top: 5vh;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      padding: 5vh;
    }

    hr {
      width: 100vw;
      position: absolute;
      left: 0;
      border: 2px solid ${Colors.primary};
    }
  }
`
