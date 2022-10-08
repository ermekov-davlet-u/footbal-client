import { ITime } from "../models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface InitialStateType {
    times: ITime[];
}

const initialState: InitialStateType = {
    times: []
}

const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        newTimes: (state, action: PayloadAction<ITime[]>) => {
            state.times = action.payload
        }
    },
})

export default timeSlice.reducer

export const { newTimes } = timeSlice.actions