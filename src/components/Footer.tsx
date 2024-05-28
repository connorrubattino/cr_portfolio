import Navbar from 'react-bootstrap/Navbar';

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
    <Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: '40px', fontSize: '0.8rem' }}>
      <Navbar.Text className="mx-auto text-center">
        Connor Rubattino's Portfolio
      </Navbar.Text>
    </Navbar>
    </>
  )
}