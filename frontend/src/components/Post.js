import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPost from "../redux/getPost/getPostActions"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { deletePost } from "../redux/deletePost/deletePostActions"
import Loading from "./Loading"
import AlertUser from "./AlertUser"
import { MdDelete } from "react-icons/md"
import { AiTwotoneEdit } from "react-icons/ai"

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

  const deleteHandler = () => {
    dispatch(deletePost(postId))
    navigate("/home")
  }
  return (
    <>
      {loading && <Loading />}
      {data && data.post && (
        <div
          styles={{
            display: "flex",
            justifyContent: "center",
            width: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "left",
              margin: "20px",
            }}
          >
            {data.post.title}
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "left",
              margin: "20px",
            }}
          >
            {data.post.content}
          </p>
          <Button
            variant="outline-dark"
            style={{
              position: "fixed",
              bottom: "15px",
              left: "15px",
            }}
            onClick={deleteHandler}
          >
            <MdDelete size={25} />
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate("/update/" + postId)}
            style={{
              position: "fixed",
              bottom: "15px",
              left: "90px",
            }}
          >
            <AiTwotoneEdit size={25} />
          </Button>
        </div>
      )}
      {error && <AlertUser alert="error" />}
    </>
  )
}

export default Post
