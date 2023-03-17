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
  },
  loginpage: {
    marginTop: moderateVerticalScale(30),
  },
  Login: {
    alignSelf: "center",
    color: ColorStyle.brown,
    fontSize: 26,
    fontWeight: "600",
  },
  user: {
    paddingHorizontal: moderateScale(50),
  },
  btnlg: {
    flex: 1,
    marginVertical: moderateScale(0),
    paddingHorizontal: moderateScale(130),
    // flexDirection:'row',
    // justifyContent:"space-evenly",
  },
  img: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: moderateScale(40),
  },
});
