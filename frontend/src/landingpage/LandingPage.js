import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

function LandingPage() {
  const navigate = useNavigate()
  const clickHandler = (path) => {
    navigate(path)
  }
  return (
    <>
      <h1> Welcome to the this funblog app</h1>
      <p> Lorem ipsum sample discripyop</p>
      <Button
        variant="primary"
        className="btn-lg"
        onClick={() => clickHandler("login")}
      >
        Login
      </Button>
      <Button
        variant="outline-dark"
        className="btn-lg"
        onClick={() => clickHandler("register")}
      >
        Register
      </Button>
    </>
  )
}

export default LandingPage
