import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deviceType : ""
};

const common = createSlice({
    name: "hokl_publ_test",
    initialState,
    reducers: {
        setDeviceType: (state, action) => {
            state.deviceType = action.payload;
        }
    }
});

export { common };

export const {
    setDeviceType
} = common.actions;

export default common.reducer;