
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UmaBansode from './pages/UmaBansode.jsx';
import { Analytics } from "@vercel/analytics/react"
function App() {


  return (
    <>
    <Analytics/>
     <BrowserRouter>
   
        <Routes>
          <Route path='/' element={<UmaBansode />} />
          
        </Routes>
    

      </BrowserRouter>

    </>
  )
}

export default App
