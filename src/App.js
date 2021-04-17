import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
