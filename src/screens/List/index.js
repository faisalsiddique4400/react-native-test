import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Input, Button, CalenderModel } from "../../shared/components/common";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { selectList, UPDATE_LIST } from "../../shared/redux/reducers";
import ListData from "./component";
import { MyLayout } from "../../shared/components";
import { useTheme } from "@react-navigation/native";
import styles from "./styles";
import { text } from '../../shared/constants/appConstants'
const List = () => {
  const { colors } = useTheme();
  const myStyle = styles(colors);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [dateError, setDateError] = useState("");
  const [nameError, setNameError] = useState("");
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return date ? `${day}/${month}/${year}` : "";
  };
  const renderItem = ({ item, index }) => {
    return (
      <ListData name={item?.name} date={formatDate(item?.date)} index={index} />
    );
  };
  const constHeader = () => {
    return (
      <View style={{ flexDirection: "row", marginBottom: moderateScale(5) }}>
        <Text style={myStyle?.tableHeading}>Name </Text>
        <Text style={myStyle?.tableHeading}>Date </Text>
      </View>
    );
  };

  const handlePress = () => {
    if (name && date) {
      dispatch(
        UPDATE_LIST([
          ...list,
          {
            name: name,
            date: date,
          },
        ])
      );
      setDate("");
      setName("");
      setNameError("");
      setDateError("");
    } else {
      !name && setNameError(text?.USERNAME_ERROR);
      !date && setDateError(text?.PASSWORD_ERROR);
    }
  };
  return (
    <MyLayout name={text?.LIST}>
      <View
        style={myStyle?.subContainer}
      >
        <Input
          headerText={text.NAME}
          width={moderateScale(160)}
          onChangeText={(e) => {
            setName(e);
          }}
          value={name}
          errorMessage={nameError}
          originalColor={nameError && colors?.red}
          onBlur={() => {
            setNameError("");
          }}
        />

        <Input
          headerText={text.DATE}
          width={moderateScale(160)}
          editable={false}
          value={date ? formatDate(date) : ""}
          Press={true}
          onInputPress={() => {
            setModal(true);
            setDateError("");
          }}
          originalColor={dateError && colors?.red}
          errorMessage={dateError}
        />
      </View>
      <Button
        text={text?.SUBMIT}
        styles={{ marginBottom: moderateScale(17) }}
        onPress={handlePress}
      />
      <View style={myStyle.horizontalDivider} />
      <Text style={myStyle.heading}>{text?.LIST}</Text>

      <FlatList
        data={list}
        bounces={false}
        contentContainerStyle={myStyle.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={constHeader}
        keyExtractor={(item, index) => index.toString()}
      />
      <CalenderModel visible={modal} setVisible={setModal} setDate={setDate} />
    </MyLayout>
  );
};

export default List;
