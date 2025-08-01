import { Route, Routes } from "react-router-dom"
import Api from "./components/Api"
import Form from "./components/Form"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Form/>}/>
        <Route path="/apidata" element={<Api/>}/>
      </Routes>
    </div>
  )
}

export default App