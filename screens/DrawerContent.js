import React from "react";
import moment from "moment";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
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

const DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  var now = moment().format();
  var currentDate = moment().format("DD/MM/YYYY");

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://yt3.ggpht.com/a/AATXAJy8V1MJElSp2uunJFtE-ZkCDdFJbBPWXOtB3g=s900-c-k-c0xffffffff-no-rj-mo",
                }}
                size={50}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Geoffrey zimba</Title>
                <Caption style={styles.caption}>1913622</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {25}%
                </Paragraph>
                <Caption style={styles.caption}> Attendance</Caption>
              </View>
              <View style={styles.section}>
                <Caption style={styles.caption}> Year {4}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={(color, size) => (
                <Icon name="home-outline" color={color} size={22} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="message-text-outline" color={color} size={22} />
              )}
              label="Announcements"
              onPress={() => {
                props.navigation.navigate("Announcements");
              }}
            />

            <DrawerItem
              icon={(color, size) => (
                <Icon name="calendar-outline" color={color} size={22} />
              )}
              label="Time tables"
              onPress={() => {
                props.navigation.navigate("Time Tables");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="qrcode-scan" color={color} size={22} />
              )}
              label="Scan attendance"
              onPress={() => {
                props.navigation.navigate("Scan QR code");
              }}
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="share-variant-outline" color={color} size={22} />
              )}
              label="Share to classmate"
              onPress={() => {
                props.navigation.navigate("Share");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences" style={styles.drawerSection}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Mode</Text>

                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <Icon name="exit-to-app" color={color} size={22} />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
