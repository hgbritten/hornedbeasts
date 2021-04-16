import { Modal } from 'react-bootstrap';
import { Component } from 'react';

// import Main from './main';

class PopModal extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (

      <Modal show={this.props.showModal} onHide={this.props.handle}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <img src={this.props.imgUrl} id="modalwidth" />
          </Modal.Body>
          <Modal.Footer>
            {this.props.description}
          </Modal.Footer>
        </Modal.Dialog>

      </Modal>
    );
  }
}

export default PopModal;
