import {
  GET_OTHER_POSTS_REQUEST,
  GET_OTHER_POSTS_SUCCESS,
  GET_OTHER_POSTS_FAILURE,
} from "./getOtherPostsTypes"

const initialState = {
  loading: false,
  responseData: [],
  error: "",
}

const getOtherPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTHER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_OTHER_POSTS_SUCCESS:
      return {
        loading: false,
        responseData: action.payload,
        error: "",
      }
    case GET_OTHER_POSTS_FAILURE:
      return {
        loading: false,
        responseData: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default getOtherPostsReducer
