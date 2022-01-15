import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <p style={{color: "red", fontSize: "30px", fontFamily: "monospace", textAlign: "center"}}>
        <ItemListContainer greetings="Primer string de la app" />
        <ItemCount stock={4} initial={1} />
      </p>
    </>
  );
}

export default App;