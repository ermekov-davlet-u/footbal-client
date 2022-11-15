import { ClubCardType, IBookType } from "../models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TypeInitailState{
    clubs: ClubCardType[];
    error: string | null;
}

const initialState: TypeInitailState = {
    clubs: [],
    error: null
}

const clubSlice = createSlice({
    name: "clubs",
    initialState,
    reducers: {
        newclubs(state, action: PayloadAction<ClubCardType[]>){
            state.clubs = action.payload
        }
    }
})

export default clubSlice.reducer

export const { newclubs } = clubSlice.actions