import { Route, Routes } from "react-router-dom"
import Api from "./components/Api"
import Form from "./components/Form"
import Home from "./components/Home"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div>
       <ToastContainer position="top-center" autoClose={3000}/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route  element={<Form/>}/>
        <Route path="/apidata" element={<Api/>}/>
      </Routes>
    </div>
  )
}

export default App