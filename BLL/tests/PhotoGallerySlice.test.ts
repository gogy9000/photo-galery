import {PhotoGalleryStateType} from "../types";
import {GetPhotosItemReturnType} from "../../DAL/types";
import {photoGalleryActions, photoGalleryReducer, photoGalleryThunks} from "../PhotoGallerySlice";
import {configureStore} from "@reduxjs/toolkit";
import {API} from "../../DAL/API";

describe('PhotoGallerySlice', () => {
    let state: PhotoGalleryStateType
    let getPhotoResponseItem: GetPhotosItemReturnType
    beforeEach(() => {
        state = {
            getPhotosResponseData: [],
            selectedPhotoUrl: null,
            getPhotosParams: {page: 1, per_page: 29, order_by: "latest"},
            errors: []
        }
        getPhotoResponseItem = {author: "author", imageUrl: "url"}
    })

    it("getPhotoResponseItem should be added", () => {
        let action = photoGalleryThunks.getPhotos.fulfilled([getPhotoResponseItem], "")
        let newState = photoGalleryReducer(state, action)
        expect(newState.getPhotosResponseData.length).toBe(1)
    })
    it("error should be added", () => {
        let error = new Error()
        let action = photoGalleryThunks.getPhotos.rejected(error, "")
        let newState = photoGalleryReducer(state, action)
        expect(newState.errors.length).toBe(1)
    })
    it("selectedPhotoUrl should be changed", () => {
        let action = photoGalleryActions.addSelectedPhotoUrl("url")
        let newState = photoGalleryReducer(state, action)
        expect(newState.selectedPhotoUrl).toBe("url")
    })
})

describe("photoGalleryThunks", () => {
    let initState: PhotoGalleryStateType = {
        getPhotosResponseData: [],
        selectedPhotoUrl: null,
        getPhotosParams: {page: 1, per_page: 29, order_by: "latest"},
        errors: []
    }
    const photoGalleryReducer = (state = initState, action: any) => {
        switch (action.type) {
            case "photoGallerySlice/getPhotos/fulfilled":
                return action.payload
            default:
                return state
        }
    }
    let store = configureStore({
        reducer: {
            photoGalleryReducer
        }
    })
    it("getPhotos thunk should worked with good response", async () => {
        const response = [{status: "ok"}] as unknown as GetPhotosItemReturnType[]
        const spy = jest.spyOn(API, "getPhotos").mockResolvedValueOnce(response)
        await store.dispatch(photoGalleryThunks.getPhotos())
        expect(spy).toBeCalled()
        const state = store.getState()
        expect(state).toEqual({"photoGalleryReducer": response})
    })
})