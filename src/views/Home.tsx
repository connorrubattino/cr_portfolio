import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


type Props = {}
export default function 
({}: Props) {
  return (
    <div className="home">
    <Card className="card bg-white-transparent border-0 text-center mt-5 text-dark font-weight-bold">
      <Card.Header><h1 >Welcome to my portfolio!</h1></Card.Header>
      <Card.Body>
        <Card.Text className='p-2' style={{ fontWeight: 'bold' }}>
        <h4>
        Passionate Software Engineer dedicated to crafting elegant solutions to complex problems. With a strong foundation in HTML, CSS, and JavaScript to enhance user experience, Python and Flask to create RESTful APIs, and React and TypeScript to develop dynamic user interfaces, I thrive on turning ideas into reality through clean, efficient code. From designing intuitive user interfaces to optimizing backend systems, I am committed to delivering high-quality software that exceeds expectations.
        </h4>
        </Card.Text>
        <Card.Text className='pb-2' style={{ fontWeight: 'bold' }}>
        <h4>
        Let's build something amazing together!
        </h4>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}