import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';


//style={{color: "red", fontSize: "30px", fontFamily: "monospace", textAlign: "center"}}
function App() {
  return (
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
              <h1>El carrito de compra todavía en construcción!</h1>
            </Route>
          </Switch>
          
        </>
    </BrowserRouter>
    
  );
}

export default App;