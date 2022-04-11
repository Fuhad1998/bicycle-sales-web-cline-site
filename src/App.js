
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom"
import Homes from './Component/HomePage/Homes/Homes';

import Footer from './Component/HomePage/Footer/Footer';
import Header from './Component/HomePage/Header/Header';
import Support from './Component/Support/Support';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';


function App() {
  return (
    <div className="App login-bac-color">
      <Router>
        <Header></Header>
        <Switch>
          
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
          <Route path="/">
            <Homes></Homes>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    
    </div>
  );
}

export default App;
