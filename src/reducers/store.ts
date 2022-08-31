import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import common from "./common";

const reducer = combineReducers({ common });

const createStore = () => {
    return configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== "production"
    });
};

export default createStore;