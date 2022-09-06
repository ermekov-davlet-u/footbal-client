import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPole } from "../models";


interface IPoleSlice{
    loading: boolean;
    pole: IPole[]
}


const initialState: IPoleSlice = {
    loading: false,
    pole: []
}

const poleSlice = createSlice({
    name: "pole",
    initialState,
    reducers: {
        newPoles( state, action: PayloadAction<IPole[]> ){
            state.pole = action.payload
        }
    }
})

export const { newPoles } = poleSlice.actions
export default poleSlice.reducer