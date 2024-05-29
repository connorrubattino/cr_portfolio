import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type Props = {}

export default function Navigation({}: Props) {
  return (
    <Navbar expand='lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        src= '/src/assets/images/cr-logo-monogram-with-gold-colors-and-shield-shape-design-template-free-vector.jpg'
                        width="100"
                        height="50"
                        className="d-inline-block align-top ms-3"
                        alt="CR Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapse'>
                    <Nav className='me-auto'>
                            <>
                                <Nav.Link className='text-white navbar-link ms-3' style={{ fontWeight: 'bold' }} as={Link} to='/portfolio'>Portfolio</Nav.Link>
                                <Nav.Link className='text-white navbar-link ms-3' style={{ fontWeight: 'bold' }} as={Link} to='/about'>About Me</Nav.Link>
                                <Nav.Link className='text-white navbar-link ms-3' style={{ fontWeight: 'bold' }} as={Link} to='/resume'>Resume</Nav.Link>
                            </>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}