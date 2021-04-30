import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box, Text, Center, SimpleGrid } from '@chakra-ui/react'
import AppText from './components/AppText';
import AppMain from './components/AppMain';
import AppNavbar from './components/AppNavbar';
import AppColorModeButton from './components/AppColorModeButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppChangelog from './components/AppChangelog';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppNavbar/>

        <Switch>
        <Route exact path='/'>
          <Center display='flex' w='100%' height='100vh'>
            <AppMain/>
          </Center>
        </Route>
        <Route path='/changelog'>
          <AppChangelog/>
        </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
