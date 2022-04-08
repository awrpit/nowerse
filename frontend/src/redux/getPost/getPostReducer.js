import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from "./getPostTypes"

const initialState = {
  loading: false,
  data: [],
  error: "",
}

const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_POST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      }
    case GET_POST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default getPostReducer
