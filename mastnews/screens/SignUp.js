import {
  AntDesign,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Checkbox } from "react-native-paper";

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <View>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1588924683106-c94f414fa1ba?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          style={styles.imageBackground}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>Sign Up</Text>
            </View>
            <View style={styles.input}>
              <View style={styles.icon}>
                <FontAwesome name="user-circle" size={24} color="white" />
              </View>
              <View>
                <TextInput style={styles.name} placeholder="Name"></TextInput>
              </View>
              <View style={styles.icon}>
                <Fontisto name="email" size={24} color="white" />
              </View>
              <View>
                <TextInput style={styles.name} placeholder="Email"></TextInput>
              </View>
              <View style={styles.icon}>
                <AntDesign name="lock1" size={26} color="white" />
              </View>
              <View>
                <TextInput
                  style={styles.name}
                  placeholder="Password"
                ></TextInput>
              </View>
              <View style={styles.icon}>
                <MaterialIcons name="phone-iphone" size={24} color="white" />
              </View>
              <View>
                <TextInput style={styles.name} placeholder="Phone"></TextInput>
              </View>
            </View>
            <View style={styles.mainremember}>
              <View style={styles.radio1}>
                <Checkbox
                  uncheckedColor="white"
                  color="white"
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={styles.rememberText}>
                <Text style={styles.remember}>
                  By signing in you accept{" "}
                  <Text style={{ color: "#E74C3C", fontWeight: "500" }}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.bottomLine} />
            <View style={styles.button}>
              <Button title="Register" color="#E74C3C"></Button>
            </View>
            <View style={{ marginLeft: 50, marginTop: 38 }}>
              <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
                Already Have an Account?{" "}
                <Text
                  style={{ color: "#E74C3C", fontWeight: "500" }}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  Sign In
                </Text>{" "}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imageBackground: {
    height: 600,
    width: 400,
  },
  container: {
    marginLeft: 15,
    marginTop: 40,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    marginTop: 40,
  },
  name: {
    color: "white",
    placeholderTextColor: "white",
    paddingLeft: 40,
    height: 40,
    width: 300,
    borderColor: "#EDF1F1",
    borderWidth: 1,
    borderRadius: 20,
  },
  icon: {
    position: "relative",
    top: 33,
    zIndex: -300,
    paddingLeft: 5,
  },
  bottomLine: {
    marginLeft: 230,
    marginTop: -10,
    borderBottomColor: "#E74C3C",
    borderBottomWidth: 1.5,
    width: 110,
  },
  remember: {
    color: "white",
    fontSize: 18,
  },
  mainremember: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 0,
  },
  radio1: {
    marginLeft: -5,
  },
  rememberText: {
    marginTop: 5,
  },
  button: {
    marginLeft: 100,
    marginTop: 20,
    height: 25,
    width: 90,
  },
});
