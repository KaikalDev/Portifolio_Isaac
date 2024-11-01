import styled from 'styled-components'
import background from '../../assets/Img/isaac.jpg'

export const TagContainer = styled.div`
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 8px;

  img {
    height: 100px;
  }
`
