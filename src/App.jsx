
import './App.css'
import Container from './components/Container';
import Control from './components/Control';
import DisplayCounter from './components/DisplayCounter';
import Header from './components/Header';

function App() {

  return (
       <center className="px-4 py-5 my-5 text-center">
    <Container>
    <Header/>
    <div className="col-lg-6 mx-auto">
    <DisplayCounter/>
    <Control></Control>
  </div>
  </Container>
  </center>
  );
}

export default App
