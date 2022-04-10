import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPosts from "../redux/getPosts/getPostsActions"
import PostCard from "./PostCard"
import Loading from "./Loading"
import AlertUser from "./AlertUser"
import NoContent from "./NoContent"
import Typewriter from "typewriter-effect"
function HomePage() {
  const user = JSON.parse(localStorage.getItem("userInfo"))
  const dispatch = useDispatch()
  const postsData = useSelector((state) => state.getPosts)
  const { loading, responseData, error } = postsData

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      {loading && <Loading />}
      <div style={{ height: "50px" }}>
        <Typewriter
          options={{
            strings: [`<h2>Welcome back, ${user.name}</h2>`],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {responseData && responseData.posts && responseData.posts.length > 0 ? (
        responseData.posts.map((post) => (
          <PostCard
            key={post._id}
            postId={post._id}
            title={post.title}
            content={post.content}
            createdBy={post.createdBy}
          />
        ))
      ) : (
        <NoContent />
      )}

      {error && <AlertUser alert={error} />}
    </div>
  )
}

export default HomePage
