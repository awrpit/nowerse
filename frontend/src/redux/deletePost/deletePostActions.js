import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "./deletePostTypes"
import axios from "axios"

const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST,
  }
}

const deletePostSuccess = () => {
  return {
    type: DELETE_POST_SUCCESS,
  }
}
const deletePostFailure = (error) => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  }
}

export const deletePost = (postId) => {
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      dispatch(deletePostRequest)
      const res = await axios.delete(
        "https://nowerse.herokuapp.com/posts/" + postId,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      console.log("deleted stuff")
      dispatch(deletePostSuccess())
    } catch (error) {
      dispatch(deletePostFailure(error.response.data.err))
    }
  }
}
