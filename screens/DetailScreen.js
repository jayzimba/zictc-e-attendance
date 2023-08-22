import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import qrcode from "../assets/sample_qrcode.png";
import React from "react";

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar.Image
          style={styles.Ava}
          source={{
            uri: "https://yt3.ggpht.com/a/AATXAJy8V1MJElSp2uunJFtE-ZkCDdFJbBPWXOtB3g=s900-c-k-c0xffffffff-no-rj-mo",
          }}
          size={160}
        />
        <Text style={styles.name}>{"Geoffrey zimba"}</Text>
        <View style={styles.section}>
          <Text style={styles.id}>{1913622}</Text>
          <Text style={styles.program}>
            {"BACHELORS OF INFORMATION TECHNOLOGY"}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
            fontSize: 22,
            color: "#000",
          }}
        >
          <Text>{"FULL TIME"}</Text>

          <View
            style={{
              height: 20,
              width: 2,
              backgroundColor: "#000",
              marginHorizontal: 10,
            }}
          ></View>

          <Text>YEAR {4}</Text>
        </View>

        <Animatable.Image
          source={require("../assets/sample_qrcode.png")}
          style={styles.qr}
          animation="zoomIn"
          duration={1000}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  Ava: {
    borderColor: "027EF3",
    marginBottom: 10,
    marginTop: 30,
  },
  section: {
    alignItems: "center",
    marginRight: 15,
  },
  id: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "bold",
  },
  program: {
    fontSize: 14,
    color: "#5c5c5c",
    marginTop: 20,
    marginHorizontal: 10,
  },
  qr: {
    height: 275,
    width: 275,
  },
});

export default DetailsScreen;
