import React from 'react'
import {Navbar,Container,Nav,} from 'react-bootstrap'
function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant='dark' >
            <Container>
                <Navbar.Brand href="#home">News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">AboutUs</Nav.Link>
                    <Nav.Link href="#link">ContactUs</Nav.Link>

                    
                </Nav>
                <Nav >
                    <Nav.Link href="#home">signup</Nav.Link>
                    <Nav.Link href="#link">login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
  )
}
export default Navbarr;
