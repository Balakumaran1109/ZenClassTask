import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Edit from './Edit'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path={`/update/:id`} element={<Edit/>}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
