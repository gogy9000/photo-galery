import {Dimensions, StatusBar} from "react-native";

export const {height, width} = Dimensions.get("screen")
export const WIDTH=Math.round(width)
export const HEIGHT=Math.round(height)
export const STATUSBARCURRENTHEIGHT = StatusBar.currentHeight || 50
export const PADDING = 30
export const PADINGHORIZONTAL=WIDTH*0.03
export const MARGINHORIZONTAL=WIDTH*0.03
export const PADINGVERTICAL=HEIGHT*0.002
export const MARGINVERTICAL=HEIGHT*0.002
export const MARGIN = 30
export const FONTSIZEPRIMARY = 22
export const FONTSIZESECONDARY = 15
export const TEXTCOLOR = "#DDDDDD"
export const BACKGROUNDCOLOR = "rgba(5,5,5,0.2)"
export const FONTWEIGHT = "100"
