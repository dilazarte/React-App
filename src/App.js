import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <p style={{color: "red", fontSize: "30px", fontFamily: "monospace", textAlign: "center"}}>
        <ItemListContainer greetings="Primer string de la app" />
      </p>
    </>
  );
}

export default App;