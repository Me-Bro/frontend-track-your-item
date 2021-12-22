import AddRecords from "./Component/AllRecords";
import Records from "./Component/AddRecords";
import EditRecords from "./Component/EditRecords";
import NavBar from "./Component/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScanQR from "./Component/ScanQR";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddRecords} />
        <Route exact path="/add" component={Records} />
        <Route exact path="/scan" component={ScanQR} />
        <Route exact path="/edit/:id" component={EditRecords} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
