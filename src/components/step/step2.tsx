import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Palette, Semantic } from "src/design/theme/color";
import TopAddBar from "src/components/ui/topaddbar/topaddbar";
import TextField from "src/components/ui/textfeild/textfeild";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { StackScreenProps } from "@react-navigation/stack";
import { SignupStackParamList } from "src/types/signup/signup.type";
import useSignup from "src/hooks/auth/useSignup";

type Step2Props = StackScreenProps<SignupStackParamList, "Step2">;

const Step2 = ({ route, navigation }: Step2Props) => {
  const { password, onChangePassword } = useSignup();
  const { name } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <View style={styles.statusBar}></View>
        <TopAddBar />
        <View style={styles.signUpContent}>
          <View style={styles.space}></View>
          <Text style={styles.title}>비밀번호</Text>
          <View style={styles.space}></View>
          <TextField
            value={password}
            onChangeText={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
            align="center"
          />
          <View style={styles.buttonView}>
            <AuthButton
              label="다음"
              onClicked={() => navigation.navigate("Step3", { name, password })}
              isActive={password.length > 0}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step2;

const styles = StyleSheet.create({
  signUpView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 852,
    backgroundColor: "#fff",
    width: "100%",
  },
  statusBar: {
    height: 70,
  },
  signUpContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    paddingTop: 40,
    flex: 1,
    gap: 5,
  },
  space: {
    height: 80,
  },
  title: {
    color: Palette.Common[100],
    textAlign: "center",

    fontSize: 28,
    fontWeight: 700,
  },
  buttonView: {
    width: "90%",
  },
});
