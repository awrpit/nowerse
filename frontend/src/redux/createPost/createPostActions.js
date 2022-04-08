import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./createPostTypes"
import axios from "axios"

const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  }
}

const createPostSuccess = () => {
  return {
    type: CREATE_POST_SUCCESS,
  }
}
const createPostFailure = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  }
}

export const createPost = (data) => {
  console.log(data)
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      dispatch(createPostRequest)
      const json = JSON.stringify(data)
      const res = await axios.post("/posts", json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      console.log(res)
      dispatch(createPostSuccess(res.data))
    } catch (error) {
      dispatch(createPostFailure(error.response.data.err))
    }
  }
}
