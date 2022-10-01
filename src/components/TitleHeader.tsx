import styled from '@emotion/styled'

interface TitleProps {
  children: string
}

const Title = styled.h1`
  color: red;
  font-size: 80px;
  font-weight: 900;
`

const TitleHeader = ({ children }: TitleProps): JSX.Element => {
  return (
    <Title>{children}</Title>
  )
}

export default TitleHeader
