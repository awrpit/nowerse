import {
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
} from "./updatePostTypes"

import axios from "axios"

const updatePostRequest = () => {
  return {
    type: UPDATE_POST_REQUEST,
  }
}

const updatePostSuccess = () => {
  return {
    type: UPDATE_POST_SUCCESS,
  }
}
const updatePostFailure = (error) => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error,
  }
}

export const updatePost = (data, postId) => {
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      dispatch(updatePostRequest)
      const json = JSON.stringify(data)
      const res = await axios.patch(
        "https://nowerse.herokuapp.com/posts/" + postId,
        json,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      console.log(res)
      dispatch(updatePostSuccess)
    } catch (error) {
      dispatch(updatePostFailure(error.response.data.err))
    }
  }
}
