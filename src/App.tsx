import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";



export default function App(){
  
  
  return (
    <>
    <Navigation/>
    <Container>
        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
        </Routes>
    </Container>
    <Footer/>
    </>
  )

}