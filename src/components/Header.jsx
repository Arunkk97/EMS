import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to={'/'}>
                    <Navbar.Brand href="#home"><img className='w-25' src="https://static.thenounproject.com/png/3627272-200.png" alt="" /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header