import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ColorStyle from "../Screens/ColorStyle/ColorStyle";
export default ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnlg} onPress={onPress}>
      <Text style={styles.textlg}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnlg: {
    backgroundColor: ColorStyle.green,
    borderRadius: 8,
    height: moderateVerticalScale(48),
    alignItems: "center",
    flexDirection: "row",
    marginVertical: moderateScale(30),
  },
  textlg: {
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    textAlign: "center",
    color: ColorStyle.black,
    flex: 1,
  },
});
