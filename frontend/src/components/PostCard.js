import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router"
function PostCard(props) {
  const trimmedContent = props.content.substring(0, 200)
  const navigate = useNavigate()

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{trimmedContent}...</Card.Text>
        <Button
          variant="outline-dark"
          className="btn-sm"
          onClick={() => navigate(`/post/${props.postId}`)}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  )
}
export default PostCard
