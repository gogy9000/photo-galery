import {GetPhotosItemReturnType, getPhotosParamsType} from "../DAL/types";
import {SerializedError} from "@reduxjs/toolkit";

export type PhotoGalleryStateType = {
    getPhotosResponseData: GetPhotosItemReturnType[]
    selectedPhotoUrl: string | null
    errors: SerializedError[],
    getPhotosParams: getPhotosParamsType
}