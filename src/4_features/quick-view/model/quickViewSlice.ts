import { instance } from "@/6_shared/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {IQuickViewSlice} from "@/4_features/quick-view/model/quickViewSlice.types.ts";

export const getAuthorPosts = createAsyncThunk(
   'quickView/getAuthorPosts',
   async (id: number) => {
      try {
         const res = await instance.get(`/users/${id}/questions`, {
            params: {
               site: "stackoverflow",
            },
         });
         return res.data;
      } catch (e) {
         console.log('cant get posts', e);
         return null;
      }
   }
);

const initialState: IQuickViewSlice = {
    authorPosts: null,
    isOpenedQuickView: false
}

export const quickViewSlice = createSlice({
    name: 'quickView',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthorPosts.fulfilled, (state, action) => {
            state.authorPosts = action.payload;
        })
    }
})

export default quickViewSlice.reducer;