import {
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
} from "./updatePostTypes"

const initialState = {
  loading: false,
  success: false,
  error: "",
}

const updatePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
      }
    case UPDATE_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default updatePostReducer
