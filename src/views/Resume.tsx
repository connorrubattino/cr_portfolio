import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

type Props = {}


export default function Resume({ }: Props) {
    return (
        <>
            <Container className='custom-container'>
                <Card style={{ width: '100%' }} className="mt-5 card bg-white-trans">
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }} className='text-center' as="h2">Company</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">years-years</Card.Subtitle>
                        <Card.Text>
                            bullet
                        </Card.Text>
                        <Card.Text>
                            bullet
                        </Card.Text>
                        <Card.Text>
                            bullet
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} className="mt-5 card bg-white-trans">
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }} className='text-center' as="h2">Company</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">years-years</Card.Subtitle>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} className="mt-5 card bg-white-trans">
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }} className='text-center' as="h2">Company</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">years-years</Card.Subtitle>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                        <Card.Text>
                            bullet                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}