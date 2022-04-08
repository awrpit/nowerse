import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "./getPostsTypes"

const initialState = {
  loading: false,
  responseData: [],
  error: "",
}

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_POSTS_SUCCESS:
      return {
        loading: false,
        responseData: action.payload,
        error: "",
      }
    case GET_POSTS_FAILURE:
      return {
        loading: false,
        responseData: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default getPostsReducer
