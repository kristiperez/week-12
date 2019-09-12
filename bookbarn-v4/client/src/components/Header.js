import React, {Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">BookBarn</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add-book">Add Book</Nav.Link>
              <Nav.Link href="/books">All Books</Nav.Link>
              
            </Nav>
          </Navbar>
        );
    }
}

export default Header;