import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <CartContext>
      <BrowserRouter>
          <>
            <NavBar />
            <Switch>
              <Route exact path="/item/:Id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/category/:IdCategory">
                <ItemListContainer />
              </Route>
              <Route exact path="/">
                    <ItemListContainer />
              </Route>
              <Route exact path="/nosotros">
                    <Nosotros />
              </Route>
              <Route exact path="/contacto">
                    <Contacto />
              </Route>
              <Route exact path="/productos">
                <Productos />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout"><Checkout /></Route>
            </Switch>
            
          </>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;