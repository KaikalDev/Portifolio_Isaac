import styled from 'styled-components'
import background from '../../assets/Img/isaac.jpg'
import { Colors, Fonts } from '../../styles'

export const SectionHome = styled.section`
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ul {
    display: flex;
    justify-content: end;
    margin-right: 5vw;
    padding-top: 24px;
    gap: 4vw;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
      padding: 8px;
      border-radius: 50%;
      border: 2px solid ${Colors.OffWhite};
    }
  }

  li {
    position: relative;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  p {
    font-size: 14px;
    position: absolute;
    bottom: -20px;
    white-space: nowrap;
  }

  > div {
    text-align: center;
    position: absolute;
    top: calc(50vh - (109px / 2));
    right: calc(50vw - (370px / 2));

    h1 {
      font-size: 64px;
      font-weight: normal;
    }
    h2 {
      font-family: ${Fonts.Roboto};
    }
  }

  i {
    position: absolute;
    bottom: 0;
    left: 0;

    img {
      height: 100px;
    }
  }
`
