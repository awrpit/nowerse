import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPosts from "../redux/getPosts/getPostsActions"
import PostCard from "./PostCard"
import Loading from "./Loading"

function HomePage() {
  const dispatch = useDispatch()
  const postsData = useSelector((state) => state.getPosts)
  const { loading, responseData, error } = postsData

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, getPosts])

  const submitHandler = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      const res = await axios.get("/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
    dispatch(getPosts())
  }

  return (
    <div>
      {loading && <Loading />}
      {responseData &&
        responseData.posts &&
        responseData.posts.map((post) => (
          <PostCard
            key={post._id}
            postId={post._id}
            title={post.title}
            content={post.content}
            createdBy={post.createdBy}
          />
        ))}
      <button onClick={submitHandler}>fuck yee</button>
    </div>
  )
}

export default HomePage
