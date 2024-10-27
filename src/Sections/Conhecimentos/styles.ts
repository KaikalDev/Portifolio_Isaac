import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerConhecimentos = styled.section`
  margin-block: 10px;
  padding-block: 5vh;
  border-top: 3px solid ${Colors.primary};
  border-bottom: 3px solid ${Colors.primary};

  > div {
    margin-inline: 10%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;

    > div {
      padding: 18px 24px;
      margin: 12px 10%;
      background-color: ${Colors.background2};
    }
  }

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  h2 {
    text-align: end;
    font-size: 48px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
  }
`
