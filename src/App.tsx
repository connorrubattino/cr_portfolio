import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Resume from "./views/Resume";



export default function App(){
  
  
  return (
    <>
    <Navigation/>
      <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
      </Container>
    <Footer/>
    </>
  )

}