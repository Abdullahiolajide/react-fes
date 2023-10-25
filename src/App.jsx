import { Navigate, Route, Routes } from "react-router-dom"
import EventS from "./components/Event"
import Test from "./components/Test"
import Useeffect from "./components/Useeffect"
import Fetch from "./components/fetch"
import Signup from "./components/signup"
import Weather from "./components/weather"
import Mapping from "./mapping"
import Button from "./props/Button"
import NotFound from "./components/NotFound"
import About from "./components/About"

function App() {
  // let handle;
  // const handleEdit =()=>{
  //   alert("edit")
  // }

  // const handleDelete =()=>{
  //   alert("delete")
  // }

  return (
    <>
    <Routes>
    <Route path="/" element={<Navigate to="/"/>} />
    <Route path="/about/:id" element={<About/>}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
    {/* <EventS/> */}
    {/* <Mapping/> */}
    {/* <Signup/> */}
    {/* <Fetch/> */}
    {/* <Weather/> */}
    {/* <Useeffect/> */}
    {/* <Button handle={handleEdit} name="edit" lastname="wale"/>
    <Button handle={handleDelete} name="delete" lastname="wale"/> */}
    </>
  )
}

export default App
