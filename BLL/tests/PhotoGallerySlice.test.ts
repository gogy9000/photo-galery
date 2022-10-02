import {PhotoGalleryStateType} from "../types";
import {GetPhotosItemReturnType} from "../../DAL/types";
import {photoGalleryActions, photoGalleryReducer, photoGalleryThunks} from "../PhotoGallerySlice";


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
    it("error should be added",()=>{
        let error=new Error()
        let action = photoGalleryThunks.getPhotos.rejected(error, "")
        let newState = photoGalleryReducer(state, action)
        expect(newState.errors.length).toBe(1)
    })
    it("selectedPhotoUrl should be changed",()=>{
        let action=photoGalleryActions.addSelectedPhotoUrl("url")
        let newState = photoGalleryReducer(state, action)
        expect(newState.selectedPhotoUrl).toBe("url")
    })
})