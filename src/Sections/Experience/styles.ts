import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerExperience = styled.section`
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid ${Colors.primary};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2vw;
  }

  h2 {
    text-align: end;
    font-size: 48px;
    margin-bottom: 48px;
  }
  .Fotos {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    position: relative;

    .Foto {
      background-color: ${Colors.primary};
      padding: 8px 16px;
      border-radius: 30px;
      width: max-content;
      height: max-content;
      position: absolute;

      &:first-child {
        top: 0;
        right: 0;
      }

      &:last-child {
        bottom: 0;
        left: 0;
      }
      img {
        height: 190px;
        border-radius: 30px;
      }
    }
  }
`
