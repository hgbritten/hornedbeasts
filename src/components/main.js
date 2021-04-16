import { Component } from 'react';
import items from '../data.json';
import { CardColumns, Card, Container, Form } from 'react-bootstrap';
import PopModal from './modal';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hornsArr: [],
    };
  }

  filterHorns = (val) => {
    if (val === isNaN) {
      this.setState({ hornsArr: [] });
    } else {
      console.log(val, 'filterhorns');
      const newArr = items.filter(horns => horns.horns === val);
      this.setState({ hornsArr: newArr });
    }
  }

  render() {
    if (this.state.hornsArr.length > 0) {
      return (
        <>
          <Container>
            <Hornform filterfunc={this.filterHorns} />
          </Container>
          <CardColumns>

            {this.state.hornsArr.map(item => (
              <LikeableBeast
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                numHorns={item.horns}
              />
            ))}
          </CardColumns>
        </>
      );
    } else {
      return (
        <>
          <Container>
            <Hornform filterfunc={this.filterHorns} />
          </Container>
          <CardColumns>

            {items.map(item => (
              <LikeableBeast
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                numHorns={item.horns}
              />
            ))}
          </CardColumns>
        </>
      );
    }
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
          showModal={this.state.showModal} handle={this.closeModalHandler} title={this.props.title}
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

class Hornform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
  }
  handleSubmit = (event) => {
    // e.preventDefault();
    this.props.filterfunc(parseInt(event.target.value));
  }
  render() {
    return (
      // <form onSubmit={this.handleFormSubmitted}>
      //   <input value='horns' type="dropdown" onInput={this.handleHorns} />
      // </form>
      <Form.Group>
        <Form.Control as="select" size="lg" onChange={this.handleSubmit}>
          <option value=''>All Beasts</option>
          <option value='1'>1 Horn</option>
          <option value='2'>2 Horns</option>
          <option value='3'>3 Horns</option>
          <option value='100'>WOW</option>
        </Form.Control>
      </Form.Group>
    );
  }
}



export default Main;
