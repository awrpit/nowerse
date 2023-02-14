import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from "./getPostTypes"
import axios from "axios"

const getPostRequest = () => {
  return {
    type: GET_POST_REQUEST,
  }
}

const getPostSuccess = (data) => {
  return {
    type: GET_POST_SUCCESS,
    payload: data,
  }
}
const getPostFailure = (error) => {
  return {
    type: GET_POST_FAILURE,
    payload: error,
  }
}

export const getPost = (id) => {
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo)
    try {
      dispatch(getPostRequest)
      const res = await axios.get(
        `https://nowerse-production.up.railway.app/posts/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      console.log(res.data)
      dispatch(getPostSuccess(res.data))
    } catch (error) {
      dispatch(getPostFailure(error.response.data.err))
    }
  }
}

export default getPost
