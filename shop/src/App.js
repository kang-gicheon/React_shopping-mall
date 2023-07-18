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

      {/* 쇼핑몰 grid 영역 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>1번 상품</h4>
            <p>1번 상품입니다</p>
          </div>
          <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>2번 상품</h4>
            <p>2번 상품입니다</p>
          </div>
          <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>3번 상품</h4>
            <p>3번 상품입니다</p>
          </div>
        </div>
      </div> 

    </div>
  );
}

export default App;
