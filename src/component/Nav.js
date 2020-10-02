import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

export default function NavBar(props) {
    return (
        <Styles>
            <Navbar collapseOnSelect expand="md" fixed='top' className="navbar">
                <Navbar.Brand href="/" className="nav-title">Industry Scanner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar >
        </Styles>
    )
}

const Styles = styled.div`
.nav-title{
    color:white;
    padding-left:3%;
}
.nav-title:hover{
    color:white;
}
.navbar{
    background-color:#1A1A1A;
    height:10%;
}


`;