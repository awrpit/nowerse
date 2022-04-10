import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

function NoContent() {
  const navigate = useNavigate()
  return (
    <>
      <h3
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        {" "}
        Oops, this space looks empty, lets create your first post.
      </h3>
      <div style={{ textAlign: "center" }}>
        <Button variant="outline-primary" onClick={() => navigate("/compose")}>
          Create the First Post
        </Button>
      </div>
    </>
  )
}

export default NoContent
