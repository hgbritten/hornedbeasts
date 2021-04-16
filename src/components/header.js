import { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" >
        <Container>
          <Navbar.Brand href="#" id="hornhead">Horned Beasts</Navbar.Brand>
        </Container>
      </Navbar>

    );
  }
}


export default Header;
