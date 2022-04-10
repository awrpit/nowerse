import { useEffect, useState } from "react"
import { Container, Row, Form, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/login/loginActions"
import { useNavigate } from "react-router"
import Loading from "../Loading"
import AlertUser from "../AlertUser"

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginUser = useSelector((state) => state.loginUser)
  const { loading, userInfo, error } = loginUser

  const changeHandler = (e) => {
    const { name, value } = e.target
    setLoginData((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  useEffect(() => {
    if (userInfo.length !== 0) {
      navigate("/home")
    }
  }, [userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(loginData))
  }
  return (
    <>
      <Container>
        {loading && <Loading />}
        <h1
          style={{
            textAlign: "center",
            padding: "25px 0",
          }}
        >
          {" "}
          Login{" "}
        </h1>
        <Row>
          <Col>
            <div
              style={{
                maxWidth: "60vw",
                margin: "auto",
              }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@gmail.com"
                    name="email"
                    value={loginData.email}
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={loginData.password}
                    onChange={changeHandler}
                  />
                  {error && <AlertUser alert={error} />}
                </Form.Group>
                <Button
                  variant="primary"
                  className="btn btn-lg"
                  type="submit"
                  onClick={submitHandler}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
