import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";

function App() {
  let [shoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Product shoes={shoes[i]} i={i}></Product>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 테스트</div>} />
          <Route path="location" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
