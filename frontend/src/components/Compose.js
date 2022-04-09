import { useState, useEffect } from "react"
import { Container, Form, Button, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { createPost } from "../redux/createPost/createPostActions"
import AlertUser from "./AlertUser"
import Loading from "./Loading"

function Compose() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  })

  const dispatch = useDispatch()
  const createdPost = useSelector((state) => state.createPost)
  const { loading, success, error } = createdPost

  const navigate = useNavigate()

  useEffect(() => {
    if (success) navigate("/home")
  }, [success, navigate])

  const changeHandler = (e) => {
    const { name, value } = e.target
    setPost((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createPost(post))
  }

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Form.Group className="mb-3">
          <Form.Label
            style={{
              marginTop: "30px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Enter Title{" "}
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={post.title}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label
            style={{
              marginTop: "15px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Content{" "}
          </Form.Label>
          <FormControl
            as="textarea"
            style={{ height: "40vh" }}
            aria-label="With textarea"
            name="content"
            value={post.content}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Compose
        </Button>
      </Container>
      {error && <AlertUser alert={error} />}
      {console.log(post)}
    </>
  )
}

export default Compose
