import styled from 'styled-components'
import { Colors } from '../../styles'

export const Polygon = styled.div`
  display: inline-block;
  padding: 5px;
  padding-left: 12px;
  background-color: ${Colors.OffWhite};
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

  div {
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    height: 100px;
    width: 200px;
    background-color: ${Colors.secondary};
    box-shadow: 0 0 0 10px ${Colors.OffWhite};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerTimeLine = styled.div`
  background-color: ${Colors.background2};
  padding: 2% 10%;
  border-radius: 50px;
  width: max-content;
  height: max-content;

  > div:first-child {
    display: flex;
  }

  > div:last-child {
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
`
