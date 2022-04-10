import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
function LandingPage() {
  const navigate = useNavigate()
  const clickHandler = (path) => {
    navigate(path)
  }
  return (
    <div
      style={{
        textAlign: "center",
        margin: "10px",
      }}
    >
      <h1 style={{ paddingTop: "100px", paddingBottom: "30px" }}>
        Welcome to Nowerse
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        {" "}
        Your one stop for everything literary. Poetry, stories, book reviews and
        cold coffee and everything in between. :){" "}
      </p>
      <Button
        variant="primary"
        className="btn btn-lg"
        style={{ margin: "20px", minWidth: "150px" }}
        onClick={() => clickHandler("login")}
      >
        Login
      </Button>
      <Button
        variant="outline-dark"
        className="btn btn-lg"
        style={{ margin: "20px", minWidth: "150px" }}
        onClick={() => clickHandler("register")}
      >
        Register
      </Button>
    </div>
  )
}

export default LandingPage
