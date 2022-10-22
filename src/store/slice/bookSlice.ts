import { IBookType } from "../models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TypeInitailState{
    books: IBookType[];
    error: string | null;
}

const initialState: TypeInitailState = {
    books: [],
    error: null
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        newBooks(state, action: PayloadAction<IBookType[]>){
            state.books = action.payload
        }
    }
})

export default bookSlice.reducer

export const { newBooks } = bookSlice.actions