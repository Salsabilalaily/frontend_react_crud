import React from 'react'
import Produk from '../Class/Produk';
//import Blog from './Blog'

const Home = () => {
    return <div>
        <Produk nama="Macbook pro 2021" stock="10" harga="103000000"/>
        <Produk nama="Macbook pro 2020" stock="20" harga="93000000"/>
        <Produk nama="Macbook pro 2019" stock="30" harga="83000000"/>
        <Produk nama="Macbook pro 2018" stock="40" harga="73000000"/>
        <Produk nama="Macbook pro 2017" stock="50" harga="63000000"/>
        <Produk nama="Macbook pro 2016" stock="60" harga="53000000"/>
    </div>
}

export default Home;