import { useState, useEffect } from "react"
import { Container, Form, Button, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useNavigate, useParams } from "react-router"
import { updatePost } from "../redux/updatePost/updatePostActions"
import Loading from "./Loading"
import AlertUser from "./AlertUser"

function UpdatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  })
  const dispatch = useDispatch()
  const updatedPost = useSelector((state) => state.updatePost)
  const { loading, success, error } = updatedPost
  const params = useParams()
  const navigate = useNavigate()
  const postId = params.postId

  useEffect(() => {
    const fetchPost = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      console.log(userInfo)
      try {
        const res = await axios.get(`/posts/${postId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        })
        setPost((prevData) => {
          return {
            ...prevData,
            title: res.data.post.title,
            content: res.data.post.content,
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [postId])

  const changeHandler = (e) => {
    const { name, value } = e.target
    setPost((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updatePost(post, postId))
    navigate("/home")
  }

  return (
    <>
      <Container>
        {loading && <Loading />}
        <Form.Group className="mb-3">
          <Form.Label>
            {" "}
            <h3 style={{ fontWeight: "bolder", marginTop: "50px" }}>
              Enter Title
            </h3>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            name="title"
            value={post.title}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <h3 style={{ fontWeight: "bolder" }}>Content</h3>
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
          Update Post
        </Button>
      </Container>
      {error && <AlertUser alert={error} />}
    </>
  )
}

export default UpdatePost
