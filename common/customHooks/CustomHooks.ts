import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {AppDispatchType, AppRootStateType} from "../../BLL/store";
import {useNavigationType} from "../../screens/types/types";
import {photoGalleryActions} from "../../BLL/PhotoGallerySlice";
import {bindActionCreators} from "@reduxjs/toolkit";

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppNavigation = () => useNavigation<useNavigationType>()

const allActions = {
    ...photoGalleryActions
}
export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(allActions, dispatch)
}