import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "./getPostsTypes"
import axios from "axios"

const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  }
}

const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data,
  }
}
const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error,
  }
}

const getPosts = () => {
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      dispatch(getPostsRequest)
      const res = await axios.get(
        "https://nowerse-production.up.railway.app/posts",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      dispatch(getPostsSuccess(res.data))
    } catch (error) {
      dispatch(getPostsFailure(error.response.data.err))
    }
  }
}

export default getPosts
