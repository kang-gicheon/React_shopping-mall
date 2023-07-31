import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [count, setCount] = useState(0);
  let [talert, setTalert] = useState(true);
  let [put, setPut] = useState(true);
  let [num, setNum] = useState("");
  let { id } = useParams();

  let fproduct = props.shoes.find((x) => x.id == id);

  useEffect(() => {
    let a = setTimeout(() => {
      setTalert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("에헤이 그러지마라");
    }
  }, [num]);

  return (
    <div className="container">
      {talert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      {count}
      <button onClick={() => setCount(count + 1)}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
