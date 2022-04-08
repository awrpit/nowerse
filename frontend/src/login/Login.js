import { useEffect, useState } from "react"
import { Container, Row, Form, Col, Button } from "react-bootstrap"
import "./index.css"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/login/loginActions"
import { useNavigate } from "react-router"
import Loading from "../components/Loading"
import AlertUser from "../components/AlertUser"

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginUser = useSelector((state) => state.loginUser)
  const { loading, userInfo, error } = loginUser

  const changeHandler = (e) => {
    const { name, value } = e.target
    setloginData((prevData) => {
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
        <h1> Login </h1>
        <Row>
          <Col>
            <div className="login mx-auto">
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
                <Button variant="primary" type="submit" onClick={submitHandler}>
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
