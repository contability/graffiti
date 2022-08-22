import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deviceType : "",
    userSearchKeyword: ""
};

const common = createSlice({
    name: "hokl_publ_test",
    initialState,
    reducers: {
        setDeviceType: (state, action) => {
            state.deviceType = action.payload;
        },
        setUserSearchKeyword: (state, action) => {
            state.userSearchKeyword = action.payload;
        }
    }
});

export { common };

export const {
    setDeviceType,
    setUserSearchKeyword
} = common.actions;

export default common.reducer;