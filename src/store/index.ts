import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { player } from "./slices/player";


export const store = configureStore({
  reducer: {
    player : player
  },
});

export type RooState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;
