import { StyleSheet } from "react-native";
import ColorStyle from "../ColorStyle/ColorStyle";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: ColorStyle.light_sky,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(80),
  },
  cards: {
    backgroundColor: ColorStyle.WHITE,
    borderRadius: 10,
    marginVertical: moderateScale(10),
    alignItems: "center",
    paddingTop:moderateVerticalScale(23)
  },
  items: {
    fontSize: 18,
    fontWeight: "500",
    color: ColorStyle.brown,
  },
  btn: {
    flex: 1,
    marginVertical: moderateScale(0),
    paddingHorizontal: moderateScale(78),
  },
  btnu: {
    flex: 1,
    marginVertical: moderateScale(0),
    left: 78,
    paddingHorizontal: moderateScale(65),
    marginLeft: moderateScale(78),
  },
  del:{
    marginVertical: moderateScale(0),
    left: 78,
    paddingHorizontal: moderateScale(65),
    marginLeft: moderateScale(78),
    color:ColorStyle.red,
    padding:moderateVerticalScale(23)
  }
});
