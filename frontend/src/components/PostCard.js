import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router"
function PostCard(props) {
  const trimmedContent = props.content.substring(0, 200)
  const navigate = useNavigate()

  return (
    <Card style={{ margin: "20px" }}>
      <Card.Header
        style={{
          color: "#212529",
          fontSize: "1.2rem",
          fontWeight: "700",
        }}
      >
        {props.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{trimmedContent}...</Card.Text>
        <Button
          variant="outline-dark"
          className="btn-sm"
          onClick={() => navigate(`/post/${props.postId}`)}
        >
          Read Post
        </Button>
      </Card.Body>
    </Card>
  )
}
export default PostCard
