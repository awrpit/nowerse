import { combineReducers } from "redux"
import createPostReducer from "./createPost/createPostReducers"
import deletePostReducer from "./deletePost/deletePostReducer"
import getPostReducer from "./getPost/getPostReducer"
import getPostsReducer from "./getPosts/getPostsReducer"
import loginReducer from "./login/loginReducer"
import registerReducer from "./register/registerReducers"
import updatePostReducer from "./updatePost/updatePostReducer"

const rootReducer = combineReducers({
  loginUser: loginReducer,
  registerUser: registerReducer,
  createPost: createPostReducer,
  getPosts: getPostsReducer,
  getPost: getPostReducer,
  deletePost: deletePostReducer,
  updatePost: updatePostReducer,
})

export default rootReducer
