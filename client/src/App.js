import "./App.css";
import ListContacts from "./Component/ListContacts";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./Component/AddContact";

function App() {
  return (
    <div className="App">
      <ListContacts />
      <AddContact />
    </div>
  );
}

export default App;
