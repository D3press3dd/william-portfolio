import styled from '@emotion/styled'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const Main = styled.main`
  padding: 2rem 6rem;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: radial-gradient(circle, transparent, transparent, #000000 100%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const MainContainer = ({ children }: Props): JSX.Element => {
  return (
    <Main>
      <img
        src={'/pc-background.jpg'}
        alt='A table with some books and a laptop'
      />
      {children}
    </Main>
  )
}

export default MainContainer
