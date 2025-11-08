import { instance } from "@/6_shared/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IQuestion, ISearchSlice } from "./search.types";

export const searchQuestions = createAsyncThunk<IQuestion[], string>(
   "search/searchQuestions",
   async (query: string, { rejectWithValue }) => {
     try {
       const response = await instance.get("/search/advanced", {
         params: {
           q: query,
           site: "stackoverflow",
         },
       });
       return response.data.items;
     } catch (error: unknown) {
       console.error("Search API failed:", error);
       let errorMessage = "Search failed";
       if (error instanceof Error) {
         const axiosError = error as {
           response?: {
             data?: {
               error_message?: string;
             };
           };
         };

         if (axiosError.response?.data?.error_message) {
           errorMessage = axiosError.response.data.error_message;
         }
       }
       return rejectWithValue(errorMessage);
     }
   }
);

const initialState: ISearchSlice = {
  isLoading: false,
  questions: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(searchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
