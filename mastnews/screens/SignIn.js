import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
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
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox, RadioButton } from "react-native-paper";

const SignIn = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1588924683106-c94f414fa1ba?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Welcome Back</Text>
          </View>
          <View>
            <Text style={styles.text1}>Sign in to continue</Text>
          </View>
          <View style={styles.input}>
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
              <TextInput style={styles.name} placeholder="Password"></TextInput>
            </View>
          </View>
          <View style={styles.mainremember}>
            <View style={styles.radio1}>
              <RadioButton
                uncheckedColor="white"
                color="white"
                value={isChecked}
                status={isChecked === true ? "checked" : "unchecked"}
                onPress={handlePress}
              />
            </View>
            <View style={styles.rememberText}>
              <Text style={styles.remember}>Remember Me</Text>
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
          <View style={styles.mainLog}>
            <View style={styles.login}>
              <Button title="LOGIN" color="#F05E14" onPress={()=> navigation.navigate("Home") }></Button>
            </View>
            <View style={styles.skip}>
              <Button title="SKIP" color="#F40331"></Button>
            </View>
          </View>
          <View style={styles.mainLog}>
            <View style={styles.google}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View style={{ marginLeft: 5, marginTop: 2 }}>
                  <AntDesign name="google" size={24} color="#F05E14" />
                </View>
                <View style={{ marginLeft: 5, marginTop: 0 }}>
                  <Text
                    style={{ color: "white", fontWeight: "400", fontSize: 20 }}
                  >
                    Gmail
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.facebook}>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View style={{ marginLeft: 5, marginTop: 2 }}>
                  <FontAwesome name="facebook-f" size={24} color="#146AF0" />
                </View>
                <View style={{ marginLeft: 5, marginTop: 0 }}>
                  <Text
                    style={{ color: "white", fontWeight: "400", fontSize: 20 }}
                  >
                    facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginLeft: 90, marginTop: 20 }}>
            <Text style={{ color: "white", fontWeight: "400", fontSize: 20 }}>
              Forgot Password ?{" "}
            </Text>
          </View>
          <View style={{ marginLeft: 50, marginTop: 45 }}>
            <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
              Don't Have an Account?{" "}
              <Text
                style={{ color: "#E74C3C", fontWeight: "500" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>{" "}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

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
  text1: {
    color: "#BDC3C7",
    fontSize: 17,
    fontWeight: "400",
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
    top: 35,
    zIndex: -300,
    paddingLeft: 5,
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
  mainLog: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 5,
  },
  login: {
    width: 152,
  },
  skip: {
    width: 152,
    marginLeft: 10,
  },
  google: {
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: "#E74C3C",
    height: 35,
    width: 152,
  },
  facebook: {
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: "#3751D0",
    height: 35,
    width: 152,
    marginLeft: 10,
  },
  bottomLine: {
    marginLeft: 230,
    marginTop: -10,
    borderBottomColor: "#E74C3C",
    borderBottomWidth: 1.5,
    width: 110,
  },
});
