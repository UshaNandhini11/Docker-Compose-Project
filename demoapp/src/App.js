import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [message, setMessage] = useState()
  // const [products, setProducts] = useState < Product > ([]);
  const handleClick = () => {
    axios.get('http://localhost:8080/api/test')
      .then(response => {
        setMessage(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to  Docker Compose Container!!
          Below message displays from springboot application...
        </p>
      </header>
      <div style={{ color: 'black', backgroundColor: 'pink' }}>
        <br></br>
        <div><Button variant='contained' onClick={() => handleClick()}>Click Me</Button></div> <div style={{ padding: '4' }}>{message}</div>
        <br></br>
      </div>
      <div className="button-type">

      </div>
    </div>
  );
}

export default App;
