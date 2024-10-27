import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.footer`
  margin-top: 5vh;
  border-top: 3px solid ${Colors.primary};

  ul {
    padding: 5vh 0;
    display: flex;
    justify-content: space-around;
    background-color: ${Colors.secondary};

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }

  span {
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
  }
`
