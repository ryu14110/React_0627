import React,{useState} from 'react';

function App() {
    const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
        <input onChange={(event)=>{
            setInputValue(event.target.value);
        }}/><br/><br/>
        <span>우리가 입력한 것은 :{inputValue}</span>
    </div>
  );
}

// const handleValue = (e)=>{
//     setInputValue(e.target.value)
// }
// return (
//     <div className="App">
//         <input onChange={handleValue}/><br/>
//         <span>우리가 입력한 것은 :</span>
//     </div>
// )

export default App;
