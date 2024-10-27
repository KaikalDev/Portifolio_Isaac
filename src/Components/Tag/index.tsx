import { TagContainer } from './styles'

type Props = {
  img: string
  alt: string
}

const Tag = ({ img, alt }: Props) => (
  <TagContainer>
    <img src={img} alt={alt} />
  </TagContainer>
)

export default Tag
