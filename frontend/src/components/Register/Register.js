import { useState, useEffect } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import Loading from "../Loading"
import register from "../../redux/register/registerActions"
import AlertUser from "../AlertUser"
function Register() {
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registerUser = useSelector((state) => state.registerUser)
  const { loading, userInfo, error } = registerUser
  const [message, setMessage] = useState(null)
  const [err, setErr] = useState(false)

  const changeHandler = (e) => {
    const { name, value } = e.target
    setregisterData((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  useEffect(() => {
    if (userInfo.length !== 0) {
      navigate("/home")
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setErr(true)
      setMessage("Please provide all the fields.")
    } else {
      if (registerData.password === registerData.confirmPassword) {
        const { name, email, password } = registerData
        const payload = { name, email, password }
        dispatch(register(payload))
      } else {
        setErr(true)
        setMessage("The passwords do not match")
      }
    }
  }

  return (
    <>
      <Container>
        <h1
          style={{
            textAlign: "center",
            padding: "25px 0",
          }}
        >
          Register
        </h1>
        <Row>
          <Col>
            <div
              style={{
                maxWidth: "60vw",
                margin: "auto",
              }}
            >
              {loading && <Loading />}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="full name"
                    name="name"
                    value={registerData.name}
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@gmail.com"
                    name="email"
                    value={registerData.email}
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={registerData.password}
                    onChange={changeHandler}
                  />
                  {err && <AlertUser alert={message} />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={changeHandler}
                  />
                  {error && <h4> {error}</h4>}
                </Form.Group>
                <Button
                  variant="outline-dark"
                  className="btn btn-lg"
                  type="submit"
                  onClick={submitHandler}
                >
                  Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Register
