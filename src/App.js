import React, { useState, createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Fungsional/HomePage';
import AboutPage from './Component/Fungsional/AboutPage';
import NavbarComp from './Component/Fungsional/NavbarComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProdukComp from './Component/Hooks/Functional/ProdukComp';
import HookReducer from './Component/Hooks/Functional/HookReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';

//import DetailComp from './Component/Fungsional/DetailComp';
//import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

export const keranjangContext = createContext()

//start useReducer
const initialState={
  jumlah: 1,
  hargasatuan: 1000000,
  hargatotal: 1000000
}

const reducer=(state, action)=>{
  switch(action. type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          //manipulasi harga total
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurang': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
      default:
          return state
  }
}
//end useReducer

//App.js
const App=()=> {

  //cart
  const[value, setValue] = useState(0)

  //nama context useReducer = agar bs jd provider value
  const[count, dispatch]=useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />

          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProdukComp} />
          <Route exact path="/reducer" component={HookReducer} />
          <Route exact path="/tagihan" component={Tagihan} />

          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
