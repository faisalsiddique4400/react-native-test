import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import style from "./styles";
import { FONTS_STYLE } from "../../../themes";
import { useTheme } from "@react-navigation/native";
import { ICON_BACK } from "../../../../assets";
const CustomHeader = ({
  backArrow,
  onRightIconPress = () => { },
  onLeftIconPress = () => { },
  headerText,
  backgroundColor,
  font,
}) => {
  const myStyle = style();
  const { colors } = useTheme();
  return (
    <View
      style={[
        myStyle?.container,
        {
          backgroundColor: backgroundColor || colors?.primary,
        },
      ]}
    >
      <View
        style={{
          alignItems: "flex-end",
        }}
      ></View>

      <View style={myStyle?.subContainer}>
        <TouchableOpacity
          disabled={!backArrow}
          style={myStyle.touchableContainerStyle}
          hitSlop={15}
          activeOpacity={0.6}
          onPress={onLeftIconPress}
        >
          {backArrow && <Image source={ICON_BACK} style={myStyle.iconStyle} />}
        </TouchableOpacity>
        <View style={myStyle?.headerTextContainer}>
          <Text
            style={[
              myStyle?.headerText,
              font ? font : FONTS_STYLE?.TEXT_LARGE,
              {
                color: colors?.textColor,
              },
            ]}
          >
            {headerText}
          </Text>
        </View>
        <TouchableOpacity
          disabled={true}
          hitSlop={10}
          style={myStyle.touchableContainerStyle}
          activeOpacity={0.6}
          onPress={onRightIconPress}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
