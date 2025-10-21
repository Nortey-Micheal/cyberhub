import { BlogType } from "@/lib/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  blogs: BlogType[];
}

const initialState: BlogState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<BlogType[]>) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action: PayloadAction<BlogType>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { setBlogs, addBlog } = blogSlice.actions;
export default blogSlice.reducer;
