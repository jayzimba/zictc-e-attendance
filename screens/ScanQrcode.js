import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import qrcode from "../assets/sample_qrcode.png";
import { BlurView } from "expo-blur";

const ScanQrcode = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    return <Text>{data}</Text>;
  };

  if (hasPermission === null) {
    return <Text>Please grant camera permision to continue Scanning</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodeArea}
      >
        <Icon
          name="arrow-back"
          size={25}
          color="#fff"
          onPress={() => navigation.goBack()}
          style={{ margin: 10, position: "absolute" }}
        />

        {scanned && (
          <View style={{ flex: 1 }}>
            <BlurView
              intensity={60}
              style={[styles.header, StyleSheet.absoluteFill]}
            ></BlurView>
            <Animatable.View
              animation="fadeInUpBig"
              duraton="500"
              style={styles.footer}
            >
              <Text
                style={{
                  color: "#027EF3",
                  fontSize: 28,
                  width: "100%",
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                QR Code Details
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                }}
              >
                <View>
                  <Animatable.Image
                    source={require("../assets/sample_qrcode.png")}
                    style={styles.qr}
                    animation="zoomIn"
                    duration={1000}
                  />
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    borderLeftWidth: 5,
                    paddingStart: 10,
                    borderRadius: 3,
                    borderColor: "#027EF3",
                  }}
                >
                  <Text style={{ flexDirection: "row", fontSize: 22 }}>
                    {"Programming"}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 7,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        flexDirection: "row",
                        fontSize: 16,
                        alignItems: "center",
                      }}
                    >
                      Course Code:{" "}
                    </Text>
                    <Text>{"BIT 3340"}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 7,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        flexDirection: "row",
                        fontSize: 16,
                        alignItems: "center",
                      }}
                    >
                      Status:{" "}
                    </Text>
                    <Text>pending</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 7,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ flexDirection: "row", fontSize: 16 }}>
                      Class Code:{" "}
                    </Text>
                    <Text style={styles.code}>{"fdrtte4e56"}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <TouchableOpacity onPress={()=>(alert('Attended successfully'), navigation.goBack(), setScanned(false))}>
                  <LinearGradient
                    colors={["#027EF3", "#0063C0"]}
                    style={styles.scanBtn}
                  >
                    <Text style={[styles.textAttendClass, { color: "#fff" }]}>
                      Attend Class
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setScanned(false)} style={{flexDirection:'row',
                alignItems:'center'}}>
                 
                    <Image source={require('../assets/sample_qrcode.png')} style={{width:23, height:23, marginRight:5}}/>
                    <Text style={[styles.textQuickScan, { color: "#027EF3" }]}>
                      Scan Again
                    </Text>
                 
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        )}
      </BarCodeScanner>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    marginTop: "70%",
    paddingVertical: 30,
  },
  barcodeArea: {
    flex: 1,
  },
  code: {
    color: "#027EF3",
  },
  textQuickScan: {
    fontSize: 16,
  },
  textAttendClass: {
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
  qr: {
    width: 120,
    height: 120,
  },
  section:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginHorizontal:10,
    marginTop:30,
  }
});

export default ScanQrcode;
