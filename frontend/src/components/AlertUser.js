import { Alert } from "react-bootstrap"

function AlertUser(props) {
  const id = Math.floor(Math.random() * 10)
  return (
    <Alert key={id} variant="alert-dark">
      {props.alert}
    </Alert>
  )
}
export default AlertUser
