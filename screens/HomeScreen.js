import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";

import LottieView from "lottie-react-native";

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import bgimage from "../assets/bgimage.png";
const image = { uri: "https://reactjs.org/logo-og.png" };

const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);

  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgimage}
        resizeMode="cover"
        style={styles.header}
      >
        <Animatable.View
          animation="fadeInDownBig"
          duration={1000}
          style={styles.headerDetails}
        >
          <Text style={styles.text_header}>
            Mark Your Attendance With Ease Using The E-Zictc Register
          </Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUpBig"
          duration={1000}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.text_header2}>Attendance</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text_header}>{25}</Text>
              <Text style={styles.text_header}>%</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Scan QR code")}>
            <LinearGradient
              colors={["#027EF3", "#0063C0"]}
              style={styles.scanBtn}
            >
              <Text style={[styles.textQuickScan, { color: "#fff" }]}>
                Quick Scan
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>

      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ScrollViewContainer}>
            <Text style={[styles.headingText, { color: "#000" }]}>
              Next class
            </Text>

            <Card
              style={{ padding: 10, margin: 5, marginEnd: 2 }}
              elevation={1}
              opacity={0.4}
            >
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.textBlue}>
                    {"Monday"} {date}
                  </Text>
                </View>
                <View style={styles.cardContent}>
                  <Avatar.Image
                    source={{
                      uri: "https://yt3.ggpht.com/a/AATXAJy8V1MJElSp2uunJFtE-ZkCDdFJbBPWXOtB3g=s900-c-k-c0xffffffff-no-rj-mo",
                    }}
                    size={50}
                  />
                  <View>
                    <Text
                      style={{ color: "#000", fontSize: 18, marginBottom: 5 }}
                    >
                      {"Instructor name"}
                    </Text>
                    <Text style={{ color: "#707070", marginBottom: 5 }}>
                      {"cloud computing and big data"}
                    </Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "#707070" }}>Status: </Text>
                      <Text style={{ color: "#000" }}>Room 92</Text>
                    </View>
                  </View>
                  <Text style={styles.textBlue}>{"12:30"}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#707070" }}>Status:</Text>
                  <LottieView
                    autoPlay
                    ref={animation}
                    // Find more Lottie files at https://lottiefiles.com/featured
                    source={require("../assets/lottie/pending2.json")}
                    style={{
                      width: 40,
                    }}
                  />
                </View>
              </View>
            </Card>

            <Text
              style={[styles.headingText, { marginTop: 20, color: "#000" }]}
            >
              Previous classes
            </Text>

            <Card
              style={{ padding: 10, margin: 5, marginEnd: 2 }}
              elevation={1}
              opacity={0.4}
            >
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.textBlue}>{"Today"}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Avatar.Image
                    source={{
                      uri: "https://yt3.ggpht.com/a/AATXAJy8V1MJElSp2uunJFtE-ZkCDdFJbBPWXOtB3g=s900-c-k-c0xffffffff-no-rj-mo",
                    }}
                    size={50}
                  />
                  <View>
                    <Text
                      style={{ color: "#000", fontSize: 18, marginBottom: 5 }}
                    >
                      {"Instructor name"}
                    </Text>
                    <Text style={{ color: "#707070", marginBottom: 5 }}>
                      {"cloud computing and big data"}
                    </Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "#707070" }}>Status: </Text>
                      <Text style={{ color: "#000" }}>Room 92</Text>
                    </View>
                  </View>
                  <Text style={styles.textBlue}>{"10:30"}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#707070" }}>Status: </Text>
                  <Text style={{ color: "#FF0000" }}>Missed</Text>
                </View>
              </View>
            </Card>

            <Card
              style={{ padding: 10, margin: 5, marginEnd: 2 }}
              elevation={1}
              opacity={0.4}
            >
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.textBlue}>{"Today"}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Avatar.Image
                    source={{
                      uri: "https://yt3.ggpht.com/a/AATXAJy8V1MJElSp2uunJFtE-ZkCDdFJbBPWXOtB3g=s900-c-k-c0xffffffff-no-rj-mo",
                    }}
                    size={50}
                  />
                  <View>
                    <Text
                      style={{ color: "#000", fontSize: 18, marginBottom: 5 }}
                    >
                      {"Instructor name"}
                    </Text>
                    <Text style={{ color: "#707070", marginBottom: 5 }}>
                      {"cloud computing and big data"}
                    </Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "#707070" }}>Status: </Text>
                      <Text style={{ color: "#000" }}>Room 92</Text>
                    </View>
                  </View>
                  <Text style={styles.textBlue}>{"08:00"}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#707070" }}>Status: </Text>
                  <Text style={{ color: "#22D145" }}>Attended</Text>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 16,
    color: "#707070",
    marginBottom: 18,
  },
  card: {
    padding: 10,
    flexDirection: "row",
    elevation: 3,
    borderRadius: 5,
    shadowRadius: 5,
    shadowColor: "#707070",
  },
  header: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 30,
    paddingVertical: 30,
    justifyContent: "space-between",
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingTop: 15,
  },
  headerDetails: {
    color: "#fff",
    paddingHorizontal: 30,

    alignItems: "center",
  },
  text_header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text_header2: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textQuickScan: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scanBtn: {
    width: 155,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  ScrollViewContainer: {
    flex: 1,
  },
  textBlue: {
    color: "#027EF3",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
