import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
const Home = ({ props, navigation }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    getData();
    getType();
    getTopNews();
  }, []);
  useEffect(async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe8b8aa78106438680ccd13dd1c7b8e0"
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  const getData = async () => {
    await axios
      .get("http://localhost:19006/news")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  const getType = async () => {
    await axios
      .get("http://localhost:19006/categories")
      .then((res) => {
        setType(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  const getTopNews = async () => {
    await axios
      .get("http://localhost:19006/TopNews")
      .then((res) => {
        setTopNews(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const handlePress = () => {
    navigation.navigate("Category");
  };
  console.log(news);
  return (
    <View>
      <FlatList
        data={news}
        horizontal
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1.2,
              margin: 8,
              borderRadius: 10,
              borderColor: "#F4EFF0",
            }}
          >
            <Pressable
              onPress={() => {
                Linking.openURL(item.url);
              }}
            >
              <ImageBackground
                source={item.urlToImage}
                style={{ height: 200, width: 340 }}
              >
                <View style={{ marginLeft: 300, marginTop: 5 }}>
                  <View>
                    <FontAwesome name="circle" size={30} color="#E21938" />
                  </View>
                  <View style={{ marginTop: -28, marginLeft: 3.5 }}>
                    <AntDesign name="save" size={20} color="white" />
                  </View>
                </View>
                <View style={{ marginTop: 93, marginLeft: 5 }}>
                  <View>
                    <Text style={{ color: "white" }} numberOfLines={1}>{item.title}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <FontAwesome name="calendar" size={20} color="#E21938" />
                    </View>
                    <View>
                      <Text style={styles.text}>
                        {item.publishedAt.split("T")[0]}
                      </Text>
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
                    <Text style={styles.text} numberOfLines={1}>{item.content}</Text>
                  </View>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        )}
      ></FlatList>
      <View style={styles.category}>
        <View>
          <Text style={styles.text1}>Categories</Text>
        </View>
        <Pressable onPress={handlePress}>
          <Text style={styles.subtext}>View All</Text>
        </Pressable>
      </View>
      <View style={styles.bottomLine} />
      <View>
        <FlatList
          data={type}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.categoryType}>
              <ImageBackground
                source={item.url}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={styles.mainType}>
                  <Text style={styles.type}>{item.type}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
        ></FlatList>
        <View style={styles.bottomLine2} />
        <View style={styles.category}>
          <View>
            <Text style={styles.text1}>Top 10 News</Text>
          </View>
          <View>
            <Text style={styles.subtext1}>View All</Text>
          </View>
        </View>
        <View style={styles.bottomLine} />
      </View>
      <View>
        {topNews.map((val) => {
          return (
            <View style={styles.card}>
              <View style={styles.imagetop}>
                <Image
                  source={val.url}
                  imageStyle={{ borderRadius: 20 }}
                  style={{ height: 150, width: 120, marginLeft: 20 }}
                ></Image>
              </View>
              <View>
                <View style={styles.save}>
                  <FontAwesome name="circle" size={30} color="#E21938" />
                </View>
                <View style={styles.icon}>
                  <AntDesign name="save" size={20} color="white" />
                </View>
              </View>
              <View style={styles.content}>
                <View>
                  <Text style={styles.mainHeading} numberOfLines={1}>{val.mainHeading}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <FontAwesome name="calendar" size={15} color="#E21938" />
                  </View>
                  <View>
                    <Text style={styles.text2}>{val.date}</Text>
                  </View>
                  <View style={{ marginLeft: 8 }}>
                    <Entypo name="eye" size={15} color="#E21938" />
                  </View>
                  <View>
                    <Text style={styles.text2}>{val.views}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 8 }}>
                    <View>
                      <Entypo name="share" size={15} color="#E21938" />
                    </View>
                    <View>
                      <Text style={styles.text2}>Share</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.text3} numberOfLines={2}>
                    {val.content}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainHeading: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    padding: 5,
  },
  text: {
    color: "white",
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 2,
  },
  category: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 5,
  },
  text1: {
    color: "black",
    fontWeight: "500",
    fontSize: 23,
  },
  subtext: {
    marginLeft: 165,
    color: "#E21938",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8,
  },
  subtext1: {
    marginLeft: 145,
    color: "#E21938",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8,
  },
  bottomLine: {
    marginTop: 10,
    borderBottomColor: "#F0E4E5",
    borderBottomWidth: 1,
    width: 400,
  },
  categoryType: {
    marginTop: 15,
    marginLeft: 10,
    height: 90,
    width: 200,
    borderColor: "#FAF7F7",
  },
  imageBackground: {
    height: 90,
    width: 200,
  },
  bottomLine2: {
    marginTop: 20,
    borderBottomColor: "#F0E4E5",
    borderBottomWidth: 1.5,
    width: 400,
  },
  mainType: {
    marginLeft: 50,
    marginTop: 30,
  },
  type: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  card: {
    marginLeft: 10,
    marginTop: 40,
    height: 140,
    width: 338,
    borderWidth: 0.1,
    borderColor: "#EEDCDF",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 20,
    flexDirection: "row",
  },
  imagetop: {
    marginTop: -20,
    marginLeft: -20,
  },
  save: {
    marginTop: -10,
    marginLeft: 170,
    paddingLeft: 10,
  },
  icon: {
    marginTop: -25,
    marginLeft: 183,
  },
  content: {
    marginTop: 20,
    marginLeft: -200,
  },
  mainHeading: {
    color: "black",
    fontWeight: "500",
    fontSize: 15,
    padding: 5,
  },
  text2: {
    marginTop: -2,
    color: "#938E8F",
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 1,
  },
  text3: {
    marginTop: -2,
    color: "#938E8F",
    fontWeight: "400",
    fontSize: 15,
    paddingLeft: 1,
    paddingTop: 5,
  },
});
