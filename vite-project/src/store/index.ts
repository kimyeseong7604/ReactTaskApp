import {configureStore} from "@reduxjs/toolkit";
import reducer from "../store/reducer/reducer";

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.getState();

export default store;