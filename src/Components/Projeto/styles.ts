import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const ProjetoContainer = styled.div`
  display: flex;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;

    h3 {
      font-size: 24px;
    }

    p {
      text-align: justify;
      font-size: 18px;
      line-height: 22px;
      font-family: ${Fonts.Roboto};
    }

    div {
      display: flex;
      gap: 12px;
      align-items: center;

      a {
        background-color: ${Colors.secondary};
        border: 2px solid transparent;
        border-radius: 50px;
        color: #fff;
        font-size: 18px;
        padding: 12px 24px;
        text-decoration: none;
        transition: all ease 0.3s;

        &:hover {
          transition: all ease 0.3s;
          transform: scale(1.1);
          background-color: transparent;
          border-color: ${Colors.OffWhite};
          text-decoration: underline;
        }
      }
    }
  }

  img {
    min-width: 50%;
    height: 50vh;
    object-position: top;
    object-fit: cover;
  }
`
