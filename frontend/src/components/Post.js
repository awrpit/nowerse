import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPost from "../redux/getPost/getPostActions"
import { Card } from "react-bootstrap"

import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { deletePost } from "../redux/deletePost/deletePostActions"
import Loading from "./Loading"
import AlertUser from "./AlertUser"

function Post() {
  const params = useParams()
  const postId = params.postId
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const postData = useSelector((state) => state.getPost)
  const { loading, data, error } = postData

  useEffect(() => {
    dispatch(getPost(postId))
  }, [dispatch, postId])

  const deleteHandler = async () => {
    dispatch(deletePost(postId))
    navigate("/home")
  }
  return (
    <>
      {loading && <Loading />}
      {data && data.post && (
        <Card
          styles={{
            display: "flex",
            justifyContent: "center",
            width: "30px",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                justifyContent: "center",
              }}
            >
              {" "}
              {data.post.title}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1.2rem",
              }}
            >
              {data.post.content}
            </Card.Text>
            <Button
              variant="outline-dark"
              style={{
                margin: "15px",
              }}
              onClick={deleteHandler}
            >
              Delete Post
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/update/" + postId)}
              style={{
                margin: "15px",
              }}
            >
              Update Post
            </Button>
          </Card.Body>
        </Card>
      )}
      {error && <AlertUser alert="error" />}
    </>
  )
}

export default Post
