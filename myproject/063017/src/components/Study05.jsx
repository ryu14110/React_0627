import React, { useState } from "react";
import "./App.css";

function App() {
  let [todo, setTodo] = useState([
    "꾸준히 운동하기",
    "영어 공부하기",
    "미니 프로젝트 진행하기",
  ]);


  //todoList를 정의합니다.
  const todoList = todo.map((item)=><li>{item}</li>);
//       <li key={item.id}>{item}</li>
//   );

// const handleClick =()=>{
//     setTodo(todo => {
//         const newTodo = [...todo];
//         newTodo.push('코딩하기');
//         return newTodo;
//     });
// }

  return (
    <div>
      <h2>신년 목표</h2>
      {/*   <button onClick={handleClick}>추가하기</button> */}
      <ul>{todoList/* todoList를 출력합니다. */}</ul>
  
    </div>
  );
}

export default App;
