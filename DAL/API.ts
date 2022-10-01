import axios, {AxiosResponse} from "axios";
import {GetPhotosResponseEntityType, getPhotosParamsType} from "./types";




const instance = axios.create(
    {
        headers: {"Accept-Version": "v1"},
        params: {client_id: "1fWamlTqFgYFMthvievAQj50-btDyH7iTkPSEGXOthI"}
    }
)

export const API = {
    getPhotos: ({page = 1, per_page = 29, order_by = "latest"}: getPhotosParamsType) =>
        instance.get(
            "https://api.unsplash.com/photos",
            {params: {per_page, page, order_by}})
            .then((response: AxiosResponse<GetPhotosResponseEntityType[]>) => {
                return response.data.map(item => ({
                    imageUrls: item.urls.raw,
                    author: item.user.username
                }))
            })
}