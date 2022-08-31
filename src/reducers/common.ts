import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false,
    isLogin: "",
    prjName: "",
    selectMenu: ""
};

const common = createSlice({
    name: "react-mind",
    initialState,
    reducers: {
        setMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        setPrjName: (state, action) => {
            state.prjName = action.payload;
        },
        setSelectMenu: (state, action) => {
            state.selectMenu = action.payload;
        }
    }
});

export { common };

export const {
    setMobile,
    setLogin,
    setPrjName,
    setSelectMenu
} = common.actions;

export default common.reducer;