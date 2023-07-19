import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js'

function App() {

  let [shoes] = useState(data);

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
         
          {/* <Product shoes = {shoes} i={1}/>
          <Product shoes = {shoes} i={2}/>
          <Product shoes = {shoes} i={3}/> */}

          {
            shoes.map((a,i) => {

              return (
                <Product shoes = {shoes[i]} i={i}></Product>
              )

            })
          }

          {/* <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src = "https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>{shoes[2].price}</p>
          </div> */}

        </div>
      </div> 

    </div>
  );
}

function Product(props) {

  return (

    <div className="col-md-4">
      <img src= {"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"}width= "80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
     </div>)

  }

export default App;
