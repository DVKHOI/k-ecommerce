import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import brandReducer from "../features/brand/brandSlice";
import blogReducer from "../features/blog/blogSlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    brand: brandReducer,
    blog: blogReducer,
    upload: uploadReducer,
  },
});
