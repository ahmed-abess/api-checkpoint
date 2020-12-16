import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import Container from "@material-ui/core/Container";
import UserList from "./component/userList";

function App() {
  return (
    <div className="App">
        <Container>
        <NavBar/>
        <UserList/>
        </Container>
    </div>
  );
}

export default App;
