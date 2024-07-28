import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  const [stack, setStack] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [outputText, setOutputText] = useState("");
 
  function handleChange(e){
    setUserInput(e.target.value);
  }

  function pushElement() {
    // console.log(userInput);
    // console.log(stack);
    const trimmedInput = userInput.trim();
    if(trimmedInput === "" ) {
      toast.error("Input is blank");
      setUserInput("");
      return;
    }

    if(stack.length >= 10) {
      toast.error("Stack is Full");
      setOutputText("Stack is Full");
      setUserInput("");
      return;
    }
    setStack((prev) => {
      return [trimmedInput, ...prev];
    })
    setOutputText(`Pushed ${userInput} in to the Stack`);
    toast.success("Element pushed successfully");
    setUserInput("");
  }


  function popElement() {
    if(stack.length <= 0) {
      setOutputText("Nothing to Pop, The Stack is empty");
      toast.error("Stack is empty");
      return;
    }
    setOutputText(`${stack[0]} is popped from stack`);
    toast.success("Element popped successfully");
    setStack((prev) => prev.slice(1)); 
  }

  function Peek() {
    if(stack.length <= 0) {
      setOutputText("Stack is empty, No peeking");
      toast.error("Stack is empty");
      return;
    }
    setOutputText(`${stack[0]} is top element in the stack`);
  }

  function isEmpty() {
    if(stack.length) {
      setOutputText("Stack is not empty");
      return;
    }
    setOutputText("Stack is empty");
  }
  
  function isStackFull() {
    if(stack.length === 10) {
      setOutputText("Stack is Full");
      return;
    }
    setOutputText("Stack is not full");
  }
  

  return (
    <div className='app'>
      <h1>Stack🍔🥪</h1>
      <main>
        <input type="text" className='userInput' placeholder='Enter Value' onChange={handleChange} value={userInput}/>
        <section className='btn-section'>
          <button onClick={pushElement}>Push</button>
          <button onClick={popElement}>Pop</button>
          <button onClick={Peek}>Peek</button>
          <button onClick={isEmpty}>IsEmpty</button>
          <button onClick={isStackFull}>IsFull</button>
        </section>
        <hr />
        <section className='result-section'>
          <h2>{outputText}</h2>
          <div className='stack'>
          {stack.map((ele,index) => {
            return (
              <p className="stack-element" key={index}>{ele}</p>
            )
          })}
          </div>
        </section>
        <ToastContainer className="toast-center" />
        </main>
    </div>
  )
}
//
export default App
