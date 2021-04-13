import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, CardColumns, Card, Navbar } from 'react-bootstrap';
// import Main from './components/main.js';
import { Component } from 'react';
import items from './data.json';
//inspired by likeablecard demo in class
function App() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#" id="hornhead">Horned Beasts</Navbar.Brand>
        </Container>
      </Navbar>

      <CardColumns>

        {items.map(item => (
          <LikeableBeast
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}

      </CardColumns>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#" id="pick">Pick your favorites!</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

class LikeableBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <Card
        bg="light"
        text="dark"
        onClick={this.addFavorite}
      >
        <Card.Img src={this.props.imgUrl} variant="top" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            🤘 = {this.state.likes}

          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
