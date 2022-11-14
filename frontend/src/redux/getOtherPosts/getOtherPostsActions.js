import {
  GET_OTHER_POSTS_REQUEST,
  GET_OTHER_POSTS_SUCCESS,
  GET_OTHER_POSTS_FAILURE,
} from "./getOtherPostsTypes"

import axios from "axios"

const getPostsRequest = () => {
  return {
    type: GET_OTHER_POSTS_REQUEST,
  }
}

const getPostsSuccess = (data) => {
  return {
    type: GET_OTHER_POSTS_SUCCESS,
    payload: data,
  }
}
const getPostsFailure = (error) => {
  return {
    type: GET_OTHER_POSTS_FAILURE,
    payload: error,
  }
}

const getOtherPosts = () => {
  return async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    try {
      dispatch(getPostsRequest)
      const res = await axios.get("/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      dispatch(getPostsSuccess(res.data))
    } catch (error) {
      dispatch(getPostsFailure(error.response.data.err))
    }
  }
}

export default getOtherPosts
