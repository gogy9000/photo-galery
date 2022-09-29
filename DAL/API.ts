import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {axiosQuery} from "./AxiosQuery";

export const API = createApi({
    reducerPath: "API",
    baseQuery: axiosQuery(
        {
            baseUrl: `https://api.unsplash.com`,
            baseParams:{client_id:"1fWamlTqFgYFMthvievAQj50-btDyH7iTkPSEGXOthI"}
        }
    ),
    endpoints: (build => ({
        getPhotos: build.query({
            query: () => ({url: `photos`,method:"get"})
        })
    }))

})