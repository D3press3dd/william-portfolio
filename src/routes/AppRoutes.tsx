
import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Contact, Home, Skills, Works } from '../pages'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = (): JSX.Element => {
  const location = useLocation()
  return (
<AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/work' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<h4>Not found</h4>}/>
    </Routes>
</AnimatePresence>
  )
}

export default AppRoutes
