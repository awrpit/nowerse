import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./createPostTypes"

const initialState = {
  loading: false,
  success: false,
  error: "",
}

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CREATE_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        error: "",
      }
    case CREATE_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default createPostReducer
