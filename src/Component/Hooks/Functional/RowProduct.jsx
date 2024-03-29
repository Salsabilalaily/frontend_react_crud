import React, { useContext } from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    const {value, setValue} = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">ROG</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Rp 30.000.000</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RowProduct