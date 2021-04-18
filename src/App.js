import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box, Text, Center, SimpleGrid } from '@chakra-ui/react'
import AppText from './components/AppText';
import AppMain from './components/AppMain';
import AppNavbar from './components/AppNavbar';
import AppColorModeButton from './components/AppColorModeButton';

function App() {
  return (
    <ChakraProvider><AppColorModeButton/>
      <Center display='flex' w='100%' height='100vh'>
        <AppMain/>
      </Center>
    </ChakraProvider>
  );
}

export default App;
