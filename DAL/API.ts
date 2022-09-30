import axios, {AxiosResponse} from "axios";
import {GetPhotoResponseEntityType} from "./types";

const instance=axios.create({params:{client_id:"1fWamlTqFgYFMthvievAQj50-btDyH7iTkPSEGXOthI"}})

export const API={
    getPhotos:()=>instance.get("https://api.unsplash.com/photos").then((response:AxiosResponse<GetPhotoResponseEntityType[]>)=>{
       return   response.data.map(item=>item.urls.small)
    })
}