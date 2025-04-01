import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import PretendardText from "src/components/pretendard/Pretendard";
import { Semantic, Palette } from "src/design/theme/color";
import { Shape } from "src/design/theme/shape";

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClicked: () => void;
}

const AuthButton = ({ label, isActive, onClicked }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: isActive ? "#003866" : "#61778A" },
      ]}
      activeOpacity={0.8}
      onPress={onClicked}
    >
      <PretendardText style={styles.buttonText}>{label}</PretendardText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    width: "100%",
    // paddingTop: 14,
    // paddingRight: 20,
    // paddingBottom: 14,
    // paddingLeft: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,

    borderRadius: Shape.Medium.radius,
    backgroundColor: Palette.Blue["20"],
  },
  buttonText: {
    color: Palette.Common["00"],
    textAlign: "center",
  },
});

export default AuthButton;
