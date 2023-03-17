import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import ColorStyle from "../Screens/ColorStyle/ColorStyle";
import { TextInput } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const LoginCompt = ({
  placeholder,
  onPress,
  keyword,
  SHOW,
  hide,
  ...props
}) => {
  return (
    <View style={styles.btnfield}>
      <TextInput
        style={styles.btntxt}
        placeholder={placeholder}
        placeholderTextColor={ColorStyle.grey}
        keyboardType={keyword}
        secureTextEntry={hide}
        {...props}
      ></TextInput>
      {SHOW ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.show}>{SHOW}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  btnfield: {
    marginTop: moderateScale(20),
    backgroundColor: ColorStyle.WHITE,
    borderRadius: moderateScale(8),
    fontSize: moderateScale(14),
    height: moderateVerticalScale(40),
    flexDirection: "row",
    paddingHorizontal: moderateScale(9),
    alignItems: "center",
  },
  btntxt: {
    flex: 1,
    color: ColorStyle.grey,
    marginLeft: 7,
  },
  show: {
    color: ColorStyle.grey,
  },
});
