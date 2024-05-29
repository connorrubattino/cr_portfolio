import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./views/Home";



export default function App(){
  
  
  return (
    <>
    <Navigation/>
      <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </Container>
    <Footer/>
    </>
  )

}