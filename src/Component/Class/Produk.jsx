import React from 'react';
import './CSS/Produk.css';

class Produk extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stock: this.props.stock,
            sub:"Beli",
            status: "Tersedia",
            disabled : false
        }
    }

    ButtonBeli= ()=>{
        this.setState({
            stock:this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render(){
        return(
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://th.bing.com/th/id/OIP.qqLYOAjVsu07OCtrfw2ItAHaE5?w=272&h=180&c=7&o=5&pid=1.7" alt="" />
                <p><b>Rp {this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        ) 
    }
}
export default Produk;