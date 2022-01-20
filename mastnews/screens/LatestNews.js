import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

const LatestNews = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/news")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }, []);
  useEffect(async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe8b8aa78106438680ccd13dd1c7b8e0"
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <View>
      {data.map((item) => {
        return (
          <View>
            <View style={styles.image}>
              <Pressable
                onPress={() => {
                  Linking.openURL(item.url);
                }}
              >
                <ImageBackground
                  source={item.urlToImage}
                  style={{ height: 180, width: 350 }}
                >
                  <View style={styles.card}>
                    <View>
                      <View style={styles.save}>
                        <FontAwesome name="circle" size={30} color="#E21938" />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign name="save" size={20} color="white" />
                      </View>
                    </View>
                    <View style={styles.main}>
                      <View>
                        <Text style={styles.mainHeading} numberOfLines={1}>
                          {item.title}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <FontAwesome
                            name="calendar"
                            size={20}
                            color="#E21938"
                          />
                        </View>
                        <View>
                          <Text style={styles.text}>{item.publishedAt.split("T")[0]}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                          <Entypo name="eye" size={20} color="#E21938" />
                        </View>
                        <View>
                          <Text style={styles.text}>{item.views}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                          <View>
                            <Entypo name="share" size={20} color="#E21938" />
                          </View>
                          <View>
                            <Text style={styles.text}>Share</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.text} numberOfLines={1}>
                          {item.content}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 75,
  },
  card: {
    marginLeft: 15,
    marginTop: 140,
    height: 100,
    width: 320,
    borderWidth: 0.1,
    borderColor: "#EEDCDF",
    borderRadius: 5,
    backgroundColor: "white",
  },
  save: {
    marginTop: -16,
    marginLeft: 260,
    paddingLeft: 10,
  },
  icon: {
    marginTop: -28,
    marginLeft: 273,
  },
  main: {
    marginLeft: 5,
  },
  mainHeading: {
    color: "black",
    fontWeight: "500",
    fontSize: 15,
    padding: 5,
  },
  text: {
    color: "#938E8F",
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 2,
  },
});
