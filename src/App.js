
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
import Products from './Component/HomePage/Products/Products';
import AllProducts from './Component/AllProducts/AllProducts';
import ProductDetale from './Component/ProductDetale/ProductDetale';
import Reviews from './Component/Reviews/Reviews';
import Purchase from './Component/Purchas/Purchase';
import MyOrders from './Component/MyOrders/MyOrders';
import Pay from './Component/Pay/Pay';
import ManageAllOrders from './Component/ManageAllOrders/ManageAllOrders';
import AddAProduct from './Component/AddAProduct/AddAProduct';
import MakeAdmin from './Component/MakeAdmin/MakeAdmin';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';





function App() {
  return (
    <div className="App login-bac-color">
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addAProduct">
            <AddAProduct></AddAProduct>
          </Route>
          <Route path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/productDetale/:id">
            <ProductDetale></ProductDetale>
          </Route>
          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
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
    </AuthProvider>
    
    </div>
  );
}

export default App;
