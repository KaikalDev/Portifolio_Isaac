import styled from 'styled-components'
import { Colors } from '../../styles'
import marcaTexto from '../../assets/Img/marcaTexto.png'

export const ContainerAboutMe = styled.section`
  margin-top: 8vh;
  display: flex;
  background-color: ${Colors.primary};
  padding: 24px 0;
  position: relative;

  .Foto {
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: 360px;
    position: absolute;
    top: -25px;
    right: 4vw;
    border: 6px solid ${Colors.OffWhite};
  }

  > div {
    margin-left: 10%;
    width: 40vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    div {
      background-image: url(${marcaTexto});
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      display: flex;
      justify-content: end;

      &:last-child {
        margin-top: 48px;
        justify-content: center;
        background-image: none;
      }
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 48px;
      width: max-content;
      padding: 12px 24px;
      margin-right: 24px;
    }

    p {
      text-align: justify;
      line-height: 22px;
    }

    a {
      background-color: ${Colors.secondary};
      border: none;
      font-size: 18px;
      max-width: max-content;
      padding: 12px 48px;
      display: flex;
      gap: 8px;
      align-items: center;
      border-radius: 50px;
      transition: all ease 0.3s;
      cursor: pointer;

      &:hover {
        transition: all ease 0.3s;
        transform: scale(1.1);
        text-decoration: underline;
      }
    }
  }
`
