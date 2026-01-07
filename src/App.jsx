
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UmaBansode from './pages/UmaBansode.jsx';

function App() {


  return (
    <>
     <BrowserRouter>
   
        <Routes>
          <Route path='/Uma-Bansode' element={<UmaBansode />} />
          
        </Routes>
    

      </BrowserRouter>

    </>
  )
}

export default App
