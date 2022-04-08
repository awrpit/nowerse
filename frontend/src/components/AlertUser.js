import { Alert } from "react-bootstrap"

function AlertUser(props) {
  const id = Math.floor(Math.random() * 10)
  return (
    <Alert key={id} variant="danger">
      {props.alert}
    </Alert>
  )
}
export default AlertUser
