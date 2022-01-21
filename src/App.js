import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
//style={{color: "red", fontSize: "30px", fontFamily: "monospace", textAlign: "center"}}
function App() {
  return (
    <>
      <NavBar />
      <div style={{fontSize: "20px", textAlign: "center", marginBottom:"5px"}}>
        {/* <ItemListContainer /> */}
        <ItemCount stock={4} initial={1} />
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;