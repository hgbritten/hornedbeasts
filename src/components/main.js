import { Component } from 'react';
import items from '../data.json';
import { CardColumns, Card } from 'react-bootstrap';
import PopModal from './modal';

class Main extends Component {

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
      showModal: false,
    };
  }

  addFavorite = () => {
    this.setState({ likes: this.state.likes + 1, showModal: true });
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <PopModal
          showModal={this.state.showModal} closeModalHandler={this.closeModalHandler} title={this.props.title}
          description={this.props.description}
          imgUrl={this.props.imgUrl}>
        </PopModal>
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
      </>
    );
  }
}



export default Main;
