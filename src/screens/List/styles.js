import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { DEVICE_WIDTH, FONTS_STYLE } from "../../shared/themes";
import { StyleSheet } from "react-native";

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors?.secondary,
    },
    count: [
      FONTS_STYLE?.HEADER,
      {
        textAlign: "center",
        color: colors?.black,
      },
    ],
    heading: [
      FONTS_STYLE.HEADER,
      {
        textAlign: "center",
        color: colors.black,
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(10),
      },
    ],
    tableHeading: [
      FONTS_STYLE?.TEXT_MEDIUM,
      { color: colors.black, width: moderateScale(180) },
    ],
    horizontalDivider: {
      width: DEVICE_WIDTH - scale(22),
      borderTopWidth: 0.8,
      borderStyle: "solid",
      borderColor: colors.grayish,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    flatListContainer: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(10),
      paddingBottom: moderateScale(85),
    },
  });

export default styles;
