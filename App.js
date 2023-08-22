import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button, LogBox } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import MainTabScreen from "./screens/MainTabScreen";
import DrawerContent from "./screens/DrawerContent";
import Timetable from "./screens/Timetable";
import Share from "./screens/Share";
import ScanQrcode from "./screens/ScanQrcode";

import RootStackScreen from "./screens/RootStackScreen";
import { useState } from "react";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#027EF3",
            },
            headerTintColor: "#fff",
            headerTitleStyle: "bold",
          }}
        >
          <Drawer.Screen name="Zictc E-Attendance" component={MainTabScreen} />
          <Drawer.Screen name="Share" component={Share} />
          <Drawer.Screen name="Scan QR code" component={ScanQrcode} />
        </Drawer.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
