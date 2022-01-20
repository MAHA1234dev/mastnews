import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import { TextInput } from "react-native-paper";

const Profile = () => {
  return (
    <View>
      <View style={styles.name}>
        <TextInput style={styles.text} placeholder="Name"></TextInput>
      </View>
      <View style={styles.name}>
        <TextInput style={styles.text} placeholder="Email"></TextInput>
      </View>
      <View style={styles.name}>
        <TextInput style={styles.text} placeholder="Password"></TextInput>
      </View>
      <View style={styles.name}>
        <TextInput style={styles.text} placeholder="Phone"></TextInput>
      </View>
      <View style={styles.button}>
        <Button title="Update" color="#CD2424" style={styles.button}></Button>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  name: {
    borderWidth: 1.2,
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 10,
    marginRight: 15,
    borderColor: "#D1CFCF",
  },
  text: {
    height: 50,
    width: 330,
    padding: 5,
  },

  button: {
    height: 20,
    width: 100,
    marginLeft: 120,
    marginTop: 20,
  },
});
