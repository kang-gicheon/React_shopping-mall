import { Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage : 'url()'}}></div>

    </div>
  );
}

export default App;
