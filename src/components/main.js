import { Component } from 'react';
import items from '../data.json';
import { CardColumns, Card } from 'react-bootstrap';

class Main extends Component {
  //Horned beasts soon
  render() {
    return (
      <CardColumns>

        {items.map(item => (
          <LikeableBeast
            title={item.title}
            description={item.description}
            imgUrl={item.image_url}
          />
        ))}

      </CardColumns>
    );
  }
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

export default Main;
