import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPosts from "../redux/getPosts/getPostsActions"
import PostCard from "./PostCard"
import Loading from "./Loading"
import AlertUser from "./AlertUser"

function HomePage() {
  const dispatch = useDispatch()
  const postsData = useSelector((state) => state.getPosts)
  const { loading, responseData, error } = postsData

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, getPosts])

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

      {error && <AlertUser alert={error} />}
    </div>
  )
}

export default HomePage
