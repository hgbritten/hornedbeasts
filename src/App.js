
import './App.css';
import Main from './components/main.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <h1>
      Horned Beasts
    </h1>
  )
}

function Footer() {
  return (
    <h1>
      By: Hunter Britten
    </h1>
  )
}

export default App;
