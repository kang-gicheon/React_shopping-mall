import { Container, Nav, Navbar } from 'react-bootstrap';
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

      {/* src 메인페이지 이미지 적용 테스트 / 이미지 태그를 사용한다면 <img src = {변수명}> */}
      <div className='main-bg'></div> 

    </div>
  );
}

export default App;
