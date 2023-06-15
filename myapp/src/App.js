import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="WELCOME TO MY E-COMMERCE" />
    </>
  );
}

export default App;
