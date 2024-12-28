
import { BrowserRouter, Form, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import About from './pages/About'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route  element={<Layout />}>
      <Route path='/' element={<About />} />
      </Route>
    </Routes>
   </BrowserRouter>
    
   </>
  )
}

export default App