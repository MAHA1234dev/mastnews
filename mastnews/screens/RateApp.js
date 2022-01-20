import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

const RateApp = () => {
  const [color , setColor] = useState(false)
const handlePressIcon = () =>{
  setColor(!color)
}

  const id = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Helpful</Text>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.text}>
            Were you able to find what you were looking for?
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: 5,
            flexDirection: "row",
            padding: 5,
          }}
        >
          {id.map((val) => {
            return <AntDesign name="star" size={24} color={`${color ? "#1D8348" : "#F39C12"}`} onPress={handlePressIcon} />
          })}
        </View>
      </View>
      <View>
        <Text style={styles.text}>Ease Of Use</Text>
      </View>
      <View style={styles.box}>
        <View>
          <Text style={styles.text}>Was the App easy to use?</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: 5,
            flexDirection: "row",
            padding: 5,
          }}
        >
          {id.map((val) => {
            return <AntDesign name="star" size={24} color="#377934" />
          })}
        </View>
      </View>

      <View style={styles.commentbox}>
        <View>
          <Text style={styles.text}>
            What can we do better? share more details here
          </Text>
          <View>
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={styles.commentbox1}
              placeholder="Type your comments here..."
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: 5,
            flexDirection: "row",
            padding: 5,
          }}
        ></View>
      </View>
    </View>
  );
};

export default RateApp;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: "600",
    color: "#131111",
    paddingLeft: 5,
    paddingTop: 10,
  },
  box: {
    marginTop: 10,
    borderWidth: 1,
    height: 80,
    width: 334,
    borderRadius: 10,
    borderColor: "#F0E4E3",
    backgroundColor: "#F0E4E3",
  },
  commentbox: {
    marginTop: 15,
    borderWidth: 1.5,
    height: 120,
    width: 334,
    borderRadius: 10,
    borderColor: "#F0E4E3",
    backgroundColor: "#F0E4E3",
  },
  commentbox1: {
    borderWidth: 1.5,
    paddingLeft: 5,
    paddingTop: 5,
    borderRadius: 10,
    borderColor: "#C7CAC7",
    backgroundColor: "#FFFFFF",
  },
});
