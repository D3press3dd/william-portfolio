
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Skills, Works } from '../pages'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/work' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<h4>Not found</h4>}/>
    </Routes>
  )
}

export default AppRoutes
