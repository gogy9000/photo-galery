import {configureStore} from "@reduxjs/toolkit";

export const setupStore=configureStore({
    reducer:{
    },
})

export type AppRootStateType =ReturnType<typeof setupStore.getState>
export type AppDispatchType=typeof setupStore.dispatch