import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  USER_LOGOUT,
} from "./loginTypes"

const initialState = {
  loading: false,
  userInfo: [],
  error: "",
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: "",
      }
    case LOGIN_USER_FAILURE:
      return {
        loading: false,
        userInfo: [],
        error: action.payload,
      }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default loginReducer
