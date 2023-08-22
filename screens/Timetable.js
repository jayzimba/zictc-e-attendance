import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const Timetable = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{"Mon"}</Text>
            <View
              style={[
                styles.dayContainer1,
                { flexDirection: "row", height: 353 },
              ]}
            >
              <Image source={require("../assets/times.png")} />
              <View
                style={{
                  flexDirection: "column",
                  height: 353,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Computer networking"}</Text>
                  <Text style={styles.otherText}>{"Mr koloko"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"116"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Cloud Computing"}</Text>
                  <Text style={styles.otherText}>{"Mr kaputula"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"94"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>
                    {"Object Oriented programming"}
                  </Text>
                  <Text style={styles.otherText}>{"Mr Asani"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"ICE 1 Room 2"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{"Tue"}</Text>
            <View
              style={[
                styles.dayContainer1,
                { flexDirection: "row", height: 353 },
              ]}
            >
              <Image source={require("../assets/times.png")} />
              <View
                style={{
                  flexDirection: "column",
                  height: 353,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Computer networking"}</Text>
                  <Text style={styles.otherText}>{"Mr koloko"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"116"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Cloud Computing"}</Text>
                  <Text style={styles.otherText}>{"Mr kaputula"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"94"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>
                    {"Object Oriented programming"}
                  </Text>
                  <Text style={styles.otherText}>{"Mr Asani"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"ICE 1 Room 2"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{"Wen"}</Text>
            <View
              style={[
                styles.dayContainer1,
                { flexDirection: "row", height: 353 },
              ]}
            >
              <Image source={require("../assets/times.png")} />
              <View
                style={{
                  flexDirection: "column",
                  height: 353,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Computer networking"}</Text>
                  <Text style={styles.otherText}>{"Mr koloko"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"116"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Cloud Computing"}</Text>
                  <Text style={styles.otherText}>{"Mr kaputula"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"94"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>
                    {"Object Oriented programming"}
                  </Text>
                  <Text style={styles.otherText}>{"Mr Asani"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"ICE 1 Room 2"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{"Thu"}</Text>
            <View
              style={[
                styles.dayContainer1,
                { flexDirection: "row", height: 353 },
              ]}
            >
              <Image source={require("../assets/times.png")} />
              <View
                style={{
                  flexDirection: "column",
                  height: 353,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Computer networking"}</Text>
                  <Text style={styles.otherText}>{"Mr koloko"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"116"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Cloud Computing"}</Text>
                  <Text style={styles.otherText}>{"Mr kaputula"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"94"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>
                    {"Object Oriented programming"}
                  </Text>
                  <Text style={styles.otherText}>{"Mr Asani"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"ICE 1 Room 2"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{"Fri"}</Text>
            <View
              style={[
                styles.dayContainer1,
                { flexDirection: "row", height: 353 },
              ]}
            >
              <Image source={require("../assets/times.png")} />
              <View
                style={{
                  flexDirection: "column",
                  height: 353,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Computer networking"}</Text>
                  <Text style={styles.otherText}>{"Mr koloko"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"116"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>{"Cloud Computing"}</Text>
                  <Text style={styles.otherText}>{"Mr kaputula"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"94"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.event}>
                  <Text style={styles.course}>
                    {"Object Oriented programming"}
                  </Text>
                  <Text style={styles.otherText}>{"Mr Asani"}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.otherText}>Room: </Text>
                    <Text style={styles.otherText}>{"ICE 1 Room 2"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          alert("PDF docement started downloading");
        }}
      >
        <Animatable.View
          animation="flash"
          iterationCount={3}
          iterationDelay={6000}
        >
          <Image
            style={styles.floatDownload}
            source={require("../assets/download2.png")}
          />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  day: {
    color: "#2794FA",
    fontWeight: "bold",
    fontSize: 30,
  },
  event: {
    borderWidth: 1,
    borderColor: "#2794FA",
    width: 270,
    padding: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    marginLeft: 7,
  },
  course: {
    color: "#2794FA",
    fontSize: 16,
    fontWeight: "700",
  },
  otherText: {
    color: "#707070",
    fontSize: 16,
    fontWeight: "500",
  },
  dayContainer: {
    marginHorizontal: 15,
  },
  dayContainer1: {
    marginVertical: 20,
  },
  touchableOpacity: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatDownload: {
    resizeMode: "cover",
    width: 50,
    height: 50,
  },
});

export default Timetable;
