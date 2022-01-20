import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const items = [
    {
      name: "Enable Push Notification",
    },
    {
      name: "About Us",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "More App",
    },
    {
      name: "Rate App",
    },
  ];
  
  return (
    <View>
      <View style={styles.bottomLine} />
      {items.map((val, index) => {
        return (
          <View style={styles.container}>
            <View style={styles.preContainer}>
              <View>
                {
                  (val.name === "Rate App" ? (
                    <Text style={styles.content} onPress={()=>navigation.navigate("Rate Us")}>
                      {val.name}{" "}
                    </Text>
                  ) : (
                    <Text style={styles.content}>{val.name} </Text>
                  ))
                }
              </View>
              <View style={styles.switch}>
                {index === 0 && (
                  <Switch
                    trackColor={{ false: "#867D7D", true: "#439A8A" }}
                    thumbColor={isEnabled ? "black" : "#897F7F"}
                    //   ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  ></Switch>
                )}
              </View>
            </View>
            <View style={styles.bottomLine} />
          </View>
        );
      })}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  bottomLine: {
    marginTop: 10,
    borderBottomColor: "#F0E4E5",
    borderBottomWidth: 1,
    width: 400,
  },
  preContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  content: {
    fontSize: 20,
    fontWeight: "600",
  },
  switch: {
    marginLeft: 75,
    marginTop: 8,
  },
});
