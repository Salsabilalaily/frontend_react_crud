import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { CartContext } from '../../CartContext';
import CardComp from './CardComp';

const AboutPage = () => {

    // const datacontext=useContext(CartContext) //hooks usecontext data global

    return (
        <div>
            <Jumbotron>
                {/* <h1 className="display-3">About Page {datacontext}</h1> */}
                <h1 className="display-3">About Page</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>

            <Container>
                <Row>
                    <Col>
                        <CardComp id="1" judul="Belajar Backend" tanggal="2 Juni 2021"/>
                    </Col>
                    <Col>
                        <CardComp id="2" judul="Belajar Frontend" tanggal="3 Juni 2021"/>
                    </Col>
                    <Col>
                        <CardComp id="3" judul="Belajar Fullstack" tanggal="4 Juni 2021"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutPage;