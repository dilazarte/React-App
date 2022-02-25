import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Favorites from './components/Favorites';


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
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout"><Checkout /></Route>
              <Route exact path="/favoritos"><Favorites /></Route>
              <Route path="*">
                  <ItemListContainer />
              </Route>
            </Switch>
          </>
      </BrowserRouter>
      <Footer />
    </CartContext>
  );
}

export default App;