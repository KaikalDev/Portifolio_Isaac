import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerExperience = styled.section`
  padding: 5% 10%;
  display: flex;
  flex-direction: column;

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

  .Chevron {
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    height: 100px;
    width: 200px;
    background-color: ${Colors.secondary};
    box-shadow: 0 0 0 10px ${Colors.OffWhite};
    display: flex;
    justify-content: center;
    align-items: center;

    &__borda {
      display: inline-block;
      padding: 5px;
      padding-left: 12px;
      background-color: ${Colors.OffWhite};
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }
  }

  .DivTimeLine {
    background-color: ${Colors.background2};
    padding: 2% 10%;
    border-radius: 50px;
    width: max-content;
    height: max-content;

    .TimeLine {
      display: flex;
    }
  }

  .Experiences {
    border-top: 3px solid ${Colors.OffWhite};
    margin-top: 12px;

    ul {
      margin-right: 25px;
      display: flex;
      justify-content: space-between;

      li {
        margin-top: -6px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      div {
        padding: 8px;
        border: 2px solid ${Colors.OffWhite};
        border-radius: 20px;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 8px;
        height: 100%;

        i {
          padding: 8px;
          border: 2px solid ${Colors.OffWhite};
          border-radius: 50%;
          width: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p {
          text-align: center;
        }

        img {
          width: 30px;
        }
      }
    }
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
