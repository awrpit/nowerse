import axios from "axios"
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
} from "./loginTypes"

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  }
}
export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  }
}
const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  }
}

export const login = (data) => {
  return async (dispatch) => {
    dispatch(loginUserRequest)
    try {
      const json = JSON.stringify(data)
      const res = await axios.post(
        "https://nowerse-production.up.railway.app/api/auth/login",
        json,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      dispatch(loginUserSuccess(res.data))
      localStorage.setItem("userInfo", JSON.stringify(res.data))
    } catch (error) {
      dispatch(loginUserFailure(error.response.data.err))
    }
  }
}
