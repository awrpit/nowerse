import "./App.css"
import { Routes, Route } from "react-router"
import HomePage from "./components/HomePage"
import Register from "./Register/Register"
import Login from "./login/Login"
import NavBar from "./navbar/Navbar"
import { Provider } from "react-redux"
import store from "./redux/store"
import LandingPage from "./landingpage/LandingPage"
import { useLocation } from "react-router"
import Compose from "./components/Compose"
import Post from "./components/Post"
import UpdatePost from "./components/UpdatePost"

function App(props) {
  let location = useLocation()
  return (
    <Provider store={store}>
      <div className="App">
        {location.pathname !== "/" ? <NavBar /> : null}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/update/:postId" element={<UpdatePost />} />
        </Routes>
      </div>
    </Provider>
  )
}
export default App
