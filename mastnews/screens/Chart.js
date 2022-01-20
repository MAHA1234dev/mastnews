import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
const Chart1 = () => {
  console.log(Dimensions.get("window").height);
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
          ],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 200,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 400,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View>
        <Text>Line Chart</Text>
        <Chart
          style={{ height: 220, marginLeft: 10 }}
          data={[
            { x: -2, y: 15 },
            { x: -1, y: 10 },
            { x: 0, y: 12 },
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
          ]}
          width={Dimensions.get("window").width}
          padding={{ left: 50, bottom: 20, right: 20, top: 20 }}
          xDomain={{ min: -2, max: 10 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <VerticalAxis
            tickCount={11}
            theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
          />
          <HorizontalAxis tickCount={5} />
          <Area
            theme={{
              gradient: {
                from: { color: "#ffa502" },
                to: { color: "#ffa502", opacity: 0.4 },
              },
            }}
          />
          <Line
            theme={{
              stroke: { color: "#ffa502", width: 5 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>
      </View>
    </View>
  );
};

export default Chart1;

const styles = StyleSheet.create({});
