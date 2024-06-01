import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    token: string;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    token: "",
    loading: false,
    error: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
    
});

export const { setToken, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
