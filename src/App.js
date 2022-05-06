import "./App.css";
import SideBar from "./Components/siderBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Components/Pages/Home/Home";
import UserList from "./Components/Pages/UserList/UserList";
import User from "./Components/Pages/User/User"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUSer from "./Components/Pages/NewPage/NewUSer";
import ProductList from "./Components/Pages/ProductList/ProductList";
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users/:userid"  element={<UserList />} />
            <Route path="/user"  element={<User />} />
            <Route path="/newUser"  element={<NewUSer />} />
            <Route path="/products"  element={<ProductList />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
