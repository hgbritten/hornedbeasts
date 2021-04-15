import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Main from './components/main.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import React from 'react';

//inspired by likeablecard demo in class
class App extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Header />
          <Main />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
