import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (

    <div className="App">
      <Navbar/>
      <div className='container'>
        <span>Total todos: 0</span>
        <div className="input-container">
          <input type="text" placeholder='Add Your Task '  value={userInput} onChange={(e) => setUserInput(
            e.target.value
  )}/>
          <button>Add</button>
        </div>

        <div className="todos-container-parent">

        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
