import React, { useEffect, useState } from 'react'
import { Container, Table, Button} from 'reactstrap'
import {Link, NavLink } from 'react-router-dom'
import axios from 'axios'

const api = 'http://localhost:3001'

function HooksUseEffects() {
    // const[namaLengkap, setNamaLengkap] = useState({nama:'John', marga:'Smith'})
    const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effects")
        axios.get(api + '/tampil').then(res => {
            // this.setState({
            setMahasiswa(res.data.values)
            // })
            // }))
            // setNamaLengkap({nama:'Taylor', marga:'Swift'})
        })
    }, [])

    return (
        // <Container>
        //     <h3>Profil User</h3>
        //     <h4>Nama: {namaLengkap.nama}</h4>
        //     <h4>Marga: {namaLengkap.marga}</h4>
        // </Container>

        <Container>
            <h2>Data Mahasiswa</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.jurusan}</td>
                            <td>
                                <Button>Edit</Button>
                                <span> </span>
                                <Button onClick={() => this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color="danger">Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
export default HooksUseEffects