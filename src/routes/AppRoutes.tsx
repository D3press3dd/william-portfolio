
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
        <Route path='/home' element={<h1>Home</h1>}/>
        <Route path='/about' element={<h1>hola</h1>}/>
        <Route path='/skills' element={<h2>como</h2>}/>
        <Route path='/work' element={<h3>estas</h3>}/>
        <Route path='/contact' element={<h4>como</h4>}/>
    </Routes>
  )
}

export default AppRoutes
