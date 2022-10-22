
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models';


interface InitalState{
    lodaing: boolean;
    user: IUser;
    error: null | string;
}

const initialState: InitalState = {
    lodaing: false, 
    user: {
        id: 0,
        username: '',
        access_token: '',
    },
    error: null
};

    const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            newUser: (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            }
        }
    })

export default userSlice.reducer

export const { newUser } = userSlice.actions