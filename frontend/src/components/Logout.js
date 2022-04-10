import { useNavigate } from "react-router"
import { useEffect } from "react"
function Logout() {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.removeItem("userInfo")
    navigate("/")
  }, [navigate])
  return (
    <>
      <h1>Logging Out</h1>
    </>
  )
}

export default Logout
