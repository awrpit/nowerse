import { useState } from "react"
import { Container, Form, Button, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { createPost } from "../redux/createPost/createPostActions"
import AlertUser from "./AlertUser"
import Loading from "./Loading"
import { BsCheckAll } from "react-icons/bs"
function Compose() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  })

  const dispatch = useDispatch()
  const createdPost = useSelector((state) => state.createPost)
  const { loading, error } = createdPost

  const navigate = useNavigate()

  const changeHandler = (e) => {
    const { name, value } = e.target
    setPost((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await dispatch(createPost(post))
    navigate("/home")
  }

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Form.Group className="mb-3">
          <Form.Label>
            <h3 style={{ fontWeight: "bolder", marginTop: "50px" }}>
              Enter Title
            </h3>
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={post.title}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <h3 style={{ fontWeight: "bolder" }}> Content</h3>{" "}
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
        <Button variant="outline-primary" type="submit" onClick={submitHandler}>
          <BsCheckAll size={25} /> Compose
        </Button>
      </Container>
      {error && <AlertUser alert={error} />}
    </>
  )
}

export default Compose
