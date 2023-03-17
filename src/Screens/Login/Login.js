import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./LoginStyle";
import { LoginCompt } from "../../Components/LoginCompt";
import Btnlogin from "../../Components/Btnlogin";
import { addUser } from "../../redux/slices/UserSlices";
import { senddata } from "../../redux/actions/senddata";
export const Login = ({ navigation }) => {
  const [Username, SetUsername] = useState(true);
  const [Password, SetPassword] = useState(true);
  const [ConfirmPass, SetConfirmPass] = useState(true);
  const [enterpass, SetEnterPass] = useState(true);
  const [Showconfirmpass, SetShowConfirmPass] = useState(true);
  const [Hide, SetHide] = useState("Show");
  const [ConfirmHide, SetConfirmHide] = useState("Show");
  
  function gotologin() {
    const userdata = {
      Name: Username,
      Pass: Password,
      ConPass: ConfirmPass,
    };
    if (!Password.trim()) {
      alert("enter password");
    } else if (!ConfirmPass.trim()) {
      alert("enter confirm password");
    } else if (Password.trim() != ConfirmPass.trim()) {
      alert("Password Not Same");
    } else {
      senddata(userdata)
      navigation.navigate("Home");
    }
  }
  function password() {
    if (enterpass == false) {
      SetHide("hide");
      SetEnterPass(true);
      return;
    }
    if (enterpass == true) {
      SetHide("Show");
      SetEnterPass(false);
      return;
    }
  }
  function Confirmpassword() {
    if (Showconfirmpass == false) {
      SetShowConfirmPass(true);
      SetConfirmHide("hide");
      return;
    }
    if (Showconfirmpass == true) {
      SetShowConfirmPass(false);
      SetConfirmHide("Show");
      return;
    }
  }
  return (
    <View style={styles.containers}>
      <View style={styles.loginpage}>
        <Text style={styles.Login}>LOGIN PAGE</Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: "https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=",
        }}
      />
      <View style={styles.user}>
        <LoginCompt
          placeholder="UserName"
          value={Username}
          onChangeText={(val) => SetUsername(val)}
          maxLength={15}
        />
        <LoginCompt
          onPress={password}
          SHOW={Hide}
          hide={enterpass}
          placeholder="Password"
          value={Password}
          onChangeText={(val) => SetPassword(val)}
          maxLength={8}
        />
        <LoginCompt
          onPress={Confirmpassword}
          SHOW={ConfirmHide}
          hide={Showconfirmpass}
          placeholder="ConfirmPass"
          value={ConfirmPass}
          onChangeText={(val) => SetConfirmPass(val)}
          maxLength={8}
        />
      </View>
      <View style={styles.btnlg}>
        <Btnlogin title="LOGIN" onPress={gotologin} />
        <Btnlogin title="GoBACK" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
