import { Component } from "react"
import { Button } from "reactstrap"

class KelasComp extends Component{
    constructor(props){
        super(props)

        this.state={
            jumlah:0

        }
    }

    tambahProduk=()=>{
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.jumlah}</h1>
                <Button onClick={this.tambahProduk}>Tambah Produk</Button>
            </div>
        )
    }
}
export default KelasComp