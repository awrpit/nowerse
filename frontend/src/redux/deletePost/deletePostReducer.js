import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "./deletePostTypes"

const initialState = {
  loading: false,
  success: false,
  error: "",
}

const deletePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DELETE_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
      }
    case DELETE_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default deletePostReducer
