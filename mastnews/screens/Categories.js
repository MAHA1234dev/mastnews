import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Categories = () => {
  const [type, setType] = useState([]);

  useEffect(() => {
    getType();
  }, []);

  const getType = async () => {
    await axios
      .get("http://localhost:3000/categories")
      .then((res) => {
        setType(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <View>
      {type.map((val) => {
        return (
          <View>
            <View style={styles.main}>
              <ImageBackground
                source={val.url}
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.mainType}>
                  <Text style={styles.type}>{val.type}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        );
      })}
      <Image></Image>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  image: {
    height: 120,
    width: 300,
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  mainType: {
    marginLeft: 100,
    marginTop: 40,
  },
  type: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
});
