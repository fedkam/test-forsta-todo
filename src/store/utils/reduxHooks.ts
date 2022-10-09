import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../index";
export const useDispatchTyped: () => AppDispatch = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
