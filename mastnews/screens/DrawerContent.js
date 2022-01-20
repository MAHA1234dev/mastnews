import {
  AntDesign,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View, Pressable, Share } from "react-native";
import {
  Drawer,
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from "react-native-paper";

const DrawerContent = ({ props, navigation }) => {
  const handlePress = async () => {
    console.log("jdklhdhkhkh");
    try {
      const result = await Share.share({
        message: "News Application  | For Daily News Analysis",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType, "activity");
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismis");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <Avatar.Image
              source={{
                uri: "https://i.pinimg.com/736x/b3/1a/4f/b31a4f70f95475dda253d36b2b54ab61.jpg",
              }}
              size={100}
              style={{ marginLeft: 90, marginTop: 20 }}
            ></Avatar.Image>
          </View>
          <View style={{ marginLeft: 80, marginTop: 10 }}>
            <Text
              style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
            >
              News Application
            </Text>
          </View>
          <View style={styles.homeDrawer}>
            <View>
              <AntDesign name="home" size={24} color="#7B241C" />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                Home
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <MaterialCommunityIcons
                name="newspaper"
                size={24}
                color="black"
              />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("LatestNews");
                }}
              >
                Latest News
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <Fontisto name="left-align" size={24} color="black" />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  // navigation.navigate("LatestNews");
                  alert("Not available");
                }}
              >
                Most View News
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <AntDesign name="folderopen" size={24} color="black" />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("Category");
                }}
              >
                Categories
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <AntDesign name="profile" size={24} color="black" />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                Profile
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <Feather name="settings" size={24} color="black" />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("Setting");
                }}
              >
                Settings
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <View>
              <MaterialCommunityIcons
                name="newspaper"
                size={24}
                color="black"
              />
            </View>
            <View style={{ marginTop: 5, marginLeft: 15 }}>
              <Text
                style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                onPress={() => {
                  navigation.navigate("LatestNews");
                }}
              >
                Dark Theme
              </Text>
            </View>
          </View>
          <View style={styles.drawerItem}>
            <Pressable style={{ flexDirection: "row" }} onPress={handlePress}>
              <View>
                <AntDesign name="sharealt" size={24} color="black" />
              </View>
              <View style={{ marginTop: 5, marginLeft: 15 }}>
                <Text
                  style={{ color: "#34495E", fontWeight: "bold", fontSize: 15 }}
                  // onPress={() => {
                  //   navigation.navigate("LatestNews");
                  // }}
                >
                  Share App
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => (
            <Octicons name="sign-out" size={24} color="black" />
          )}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        ></DrawerItem>
      </Drawer.Section>
    </View>
  );
};
{
  /* <Fontisto name="left-align" size={24} color="black" /> */
}
export default DrawerContent;

const styles = StyleSheet.create({
  homeDrawer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F2D7D5",
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    height: 40,
    paddingLeft: 10,
    paddingTop: 5,
  },
  drawerItem: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
    marginRight: 30,
    height: 40,
    paddingLeft: 10,
    paddingTop: 5,
  },
});
