import styled from '@emotion/styled'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const Main = styled.main`
    padding: 2rem;
`

const MainContainer = ({ children }: Props): JSX.Element => {
  return (
    <Main>
        {children}
    </Main>
  )
}

export default MainContainer
