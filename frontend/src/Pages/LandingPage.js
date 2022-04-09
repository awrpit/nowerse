import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import Styles from "../Styles/landingPage.module.css"
function LandingPage() {
  const navigate = useNavigate()
  const clickHandler = (path) => {
    navigate(path)
  }
  return (
    <div className={Styles.landingPage}>
      <h1 className={Styles.title}> Welcome to Nowerse</h1>
      <p>
        {" "}
        Your one stop for everything literary. Poetry, stories, book reviews and
        cold coffee and everything in between. :){" "}
      </p>
      <Button
        variant="primary"
        className={Styles.landingbtn}
        onClick={() => clickHandler("login")}
      >
        Login
      </Button>
      <Button
        variant="outline-dark"
        className={Styles.landingbtn}
        onClick={() => clickHandler("register")}
      >
        Register
      </Button>
    </div>
  )
}

export default LandingPage
