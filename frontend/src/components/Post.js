import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPost from "../redux/getPost/getPostActions"
import { Card } from "react-bootstrap"

import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { deletePost } from "../redux/deletePost/deletePostActions"

function Post() {
  const params = useParams()
  const postId = params.postId
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const postData = useSelector((state) => state.getPost)
  const { loading, data, error } = postData

  useEffect(() => {
    dispatch(getPost(postId))
  }, [dispatch, getPost])

  // const submitHandler = async () => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  //   console.log(userInfo)
  //   try {
  //     const res = await axios.get(`/posts/${postId}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     })
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const deleteHandler = async () => {
    dispatch(deletePost(postId))
    navigate("/home")
    // dispatch(deletePost(postId))
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(postId)
    // console.log(userInfo.token)
    // try {
    //   const res = await axios.delete("/posts/" + postId, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${userInfo.token}`,
    //     },
    //   })
    //   console.log(res)
    //   navigate("/home")
    // } catch (error) {
    //   console.log(error)
    // }
  }
  return (
    <>
      hey this is the {postId}
      {data && data.post && (
        <Card>
          <Card.Body>
            <Card.Title> {data.post.title}</Card.Title>
            <Card.Text>{data.post.content}</Card.Text>
            <Button variant="primary" onClick={deleteHandler}>
              Delete Post
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/update/" + postId)}
            >
              Update Post
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default Post
