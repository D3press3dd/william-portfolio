import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import AppRoutes from './routes/AppRoutes'

function App (): JSX.Element {
  return (
    <>
      <Navbar />
      <MainContainer>
        <AppRoutes />
      </MainContainer>
      <div style={{ height: '200vh' }}></div>
    </>
  )
}

export default App
