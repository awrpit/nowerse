import axios from "axios"
import { loginUserSuccess } from "../login/loginActions"
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./registerTypes"

const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  }
}

const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data,
  }
}
const registerUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  }
}

const register = (data) => {
  console.log(data)
  return async (dispatch) => {
    try {
      dispatch(registerUserRequest)
      const json = JSON.stringify(data)
      const res = await axios.post("/api/auth/register", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      dispatch(registerUserSuccess(res.data))
      dispatch(loginUserSuccess(res.data))
      localStorage.setItem("userInfo", JSON.stringify(res.data))
    } catch (error) {
      dispatch(registerUserFailure(error.response.data.err))
    }
  }
}

export default register
