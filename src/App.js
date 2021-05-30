import './App.css';
import Navbar from './components/Navbar'
import Home from '../src/components/pages/Home'
import Services from '../src/components/pages/Services'
import Products from "../src/components/pages/Products";
import SignUp from "../src/components/pages/SignUp";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
