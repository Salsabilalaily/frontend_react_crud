import React, {useContext} from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import { keranjangContext } from '../../../App';

function Tagihan() {
    const countContext = useContext(keranjangContext) //call di app.js

    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Tagihan</h1>
                <p className="lead">({countContext.keranjangState.jumlah}x) Jasa Desain Arsitek Rumah</p>
                <hr className="my-2" />
                <p>Harga Total Rp {countContext.keranjangState.hargatotal}</p>
                <p className="lead">
                    <Button color="primary">Lanjutkan Pembayaran</Button>
                </p>
            </Jumbotron>
        </Container>

    )
}
export default Tagihan