import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPosts from "../redux/getPosts/getPostsActions"
import PostCard from "./PostCard"
import Loading from "./Loading"
import AlertUser from "./AlertUser"

function HomePage() {
  const user = JSON.parse(localStorage.getItem("userInfo"))
  const dispatch = useDispatch()
  const postsData = useSelector((state) => state.getPosts)
  const { loading, responseData, error } = postsData
  console.log(user)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      {loading && <Loading />}
      <h1 style={{ textAlign: "center", margin: "10px", fontSize: "2.5rem" }}>
        Welcome back, {user.name}.{" "}
      </h1>
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

      {error && <AlertUser alert={error} />}
    </div>
  )
}

export default HomePage
