import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Categories from "./screens/Categories";
import Chart1 from "./screens/Chart";
import DrawerContent from "./screens/DrawerContent";
import Home from "./screens/Home";
import LatestNews from "./screens/LatestNews";
import MainTabScreen from "./screens/MainTabScreen";
import Profile from "./screens/Profile";
import RateApp from "./screens/RateApp";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });
  const Drawer = createDrawerNavigator();
  return loader ? (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://c8.alamy.com/comp/2BMG1FN/breaking-news-logo-icon-for-news-entertaining-show-sign-banner-vector-illustration-on-circle-shape-style-background-2BMG1FN.jpg",
        }}
        style={styles.image}
      ></Image>
      <StatusBar style="auto" />
    </View>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Chart" component={Chart1} />

        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LatestNews" component={LatestNews} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Category" component={Categories} />
        <Drawer.Screen name="Setting" component={Settings} />
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Rate Us" component={RateApp} />

        {/* <Drawer.Screen name="MainTab" component={MainTabScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// drawercontent={props => <DrawerContent {...props} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: "100%",
    width: "100%",
    marginLeft: 2,
    marginTop: 25,
  },
});
