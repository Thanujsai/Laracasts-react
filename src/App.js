import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Flex } from 'antd';
import Another from './Components/Another';

function App() {

  const [count,setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <Another name="Thanuj" />
      <Button onClick={increment}>increment</Button>
      <p>{count}</p>
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
