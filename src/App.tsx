import { MainContainer, Navbar } from './components'
import AppRoutes from './routes/AppRoutes'
import SocialBar from './components/SocialBar'

function App (): JSX.Element {
  return (
    <>
      <Navbar />
      <SocialBar/>
      <MainContainer>
        <AppRoutes />
      </MainContainer>
      <div style={{ height: '200vh' }}></div>
    </>
  )
}

export default App
