import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router";
import "./App.scss";
import Container from "./components/Context/Container";
import Header from "./components/Header/Header";
import Join from "./components/Join/Join";
import Profile from "./components/Profile/Profile";
import Sign from "./components/Sign/Sign";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <Container>
      <div className="App">
        <div className="Nav">
          <Header />
          <hr />
        </div>
        <Routes>
          <Route path="/toList" element={<ToDoList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
