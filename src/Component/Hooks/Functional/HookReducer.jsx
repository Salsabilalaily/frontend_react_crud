import React, {useContext, useReducer} from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap'
import { keranjangContext } from '../../../App'

// const initialState={
//     jumlah: 1,
//     hargasatuan: 1000000,
//     hargatotal: 1000000
// }

// const reducer=(state, action)=>{
//     switch(action. type) {
//         case 'tambah': return {
//             ...state,
//             jumlah: state.jumlah + 1,
//             //manipulasi harga total
//             hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
//         }
//         case 'kurang': return {
//             ...state,
//             jumlah: state.jumlah - 1,
//             hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
//         }
//         default:
//             return state
//     }
// }

function HookReducer() {

    const countContext = useContext(keranjangContext) //call di app.js

    // const[count, dispatch]=useReducer(reducer, initialState) //dispatch=aksi, count=state

    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="http://placeimg.com/640/480/arch" alt="Card image cap" />
                    </Card>
                </Col>
                    <Col xs="6">
                        <h3>Jasa Desain Arsitek Rumah</h3>
                        <p>Harga</p>
                        <h3>Rp {countContext.keranjangState.hargasatuan}</h3> {/* <h3>Rp {count.hargasatuan}</h3> */}
                        <p>Jumlah</p>
                        <Row>
                            <Col><Button onClick={() => countContext.keranjangDispatch({ type: 'tambah'})} color="danger">+</Button></Col>    {/* <Col><Button onClick={()=>dispatch({type:'tambah'})} color="danger">+</Button></Col> */}
                            <Col>{countContext.keranjangState.jumlah}</Col>
                            <Col><Button onClick={() => countContext.keranjangDispatch({ type: 'kurang'})}>-</Button></Col>    {/* <Col><Button onClick={()=>dispatch({type:'kurang'})}>-</Button></Col> */}
                        </Row>
                        <br/>
                        <Button color="success" size="lg">Total Rp {countContext.keranjangState.hargatotal}</Button>
                        <hr/>
                        <NavLink to='/tagihan'>Tagihan Belanja</NavLink>
                    </Col>
            </Row>
        </Container>
    )
}
export default HookReducer