import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./registerTypes"

const initialState = {
  loading: false,
  userInfo: [],
  error: "",
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: "",
      }
    case REGISTER_USER_FAILURE:
      return {
        loading: false,
        userInfo: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default registerReducer
