import {Image,StyleSheet} from "react-native";
import {useActions, useAppSelector} from "../common/customHooks/CustomHooks";
import {HEIGHT, WIDTH} from "../common/variables/Variables";
import {useEffect} from "react";

export const SelectedPhoto = () => {
  const selectedPhotoUrl=useAppSelector(state => state.photoGalleryReducer.selectedPhotoUrl)
  const {addSelectedPhotoUrl}=useActions()
  useEffect(()=>()=>{addSelectedPhotoUrl(null)})
  const mutateSelectedPhotoUrl=selectedPhotoUrl?selectedPhotoUrl+`&fit=fillmax&fill=blur&w=${WIDTH}&h=${HEIGHT}`:undefined

  return(
      <Image resizeMode={"contain"} style={styles.image} source={{uri:mutateSelectedPhotoUrl}}/>
  )
}
const styles=StyleSheet.create({
  image:{
    width:WIDTH,
    height:HEIGHT,
  }
})