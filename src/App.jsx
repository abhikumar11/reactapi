import { Link, Route, Routes } from "react-router-dom"
import Api from "./components/Api"
import Form from "./components/Form"
import Home from "./components/Home"
import { ToastContainer } from "react-toastify"
import About from "./components/About"
import Services from "./components/Services"
import Contatct from "./components/Contatct"

const App = () => {
  return (
    <div>
      <Link to="/about/1">User 1</Link>
      <Link to="/about/2">User 2</Link>
      <Link to="/about/3">User 3</Link>
       <ToastContainer position="top-center" autoClose={3000}/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route  element={<Form/>}/>
        <Route path="/apidata" element={<Api/>}/>
        <Route path="/about/:name" element={<About/>}/>
        <Route path="/services/:service" element={<Services/>}/>
        <Route path="/contact/:city" element={<Contatct/>}/>
      </Routes>
    </div>
  )
}

export default App