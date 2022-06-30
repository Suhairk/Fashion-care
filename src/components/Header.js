import React from 'react'
import {Nav,Navbar, Container, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
import '../components/compStyles/Header.css'
import HeaderImages  from '../constents/HeaderImages'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {

    const user = {
      status:false,
      name:"Mubashir"
    }
    //console.log(user.name)
    

  return (
   <header>
     <Navbar bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href='#'>
              <img src={HeaderImages.LOGO} alt= "fashionCare" className='logo-img'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
           <Nav className="me-auto my-2 my-lg-0">
           <LinkContainer to="/">
            <Nav.Link className='py-2 color-w'>Home</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/mens">
            <Nav.Link href='#'className='py-2 color-w'>Mens</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/womens">
            <Nav.Link href='#'className='py-2 color-w'>Womens</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/jewelery">
            <Nav.Link href='#'className='py-2 color-w'>jewelery</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/electronics">
            <Nav.Link href='#'className='py-2 color-w'>electronics</Nav.Link>
           </LinkContainer>

            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Nav>
            {/* right Tab */}
            <Nav>
            <LinkContainer to="/wishlist">
                <Nav.Link href='#'className='py-2 color-w'>WISH LIST</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link href='#'className='py-2 color-w'>CART</Nav.Link>
              </LinkContainer>
            
            {user.status ? 
            <NavDropdown title={user.name} id="navbarScrollingDropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/logout">
                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> :  
            <Nav.Link href='/login'className='py-2 color-w'>LOGIN</Nav.Link>
          }
            </Nav>
           </Navbar.Collapse>
        </Container>
     </Navbar>
   </header>
  )
}

export default Header