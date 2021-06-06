import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    //panggil value cart secara global dari app.js
    const { value, setValue } = useContext(CartContext)

    return (
        <div>
            <Navbar className="navbar-dark bg-dark" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/kelas" className="nav-link">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Hook</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useeffects" className="nav-link">Use Effects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">Reducer</NavLink>
                        </NavItem>

                    </Nav>

                    <NavbarText>
                        <Button color="danger">
                            <FaShoppingCart/>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>



                </Collapse>
            </Navbar>
        </div>

       
    )
}
export default NavbarComp;