const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrontPage from "./screens/FrontPage";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import VedioPlay from "./screens/VedioPlay";
import ShortsPage from "./screens/ShortsPage";
import ShortsPlay from "./screens/ShortsPlay";
import Channels from "./screens/Channels";
import Library from "./screens/Library";
import Explore from "./screens/Explore";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "AbhayaLibre-Regular": require("./assets/fonts/AbhayaLibre-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FrontPage"
              component={FrontPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VedioPlay"
              component={VedioPlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShortsPage"
              component={ShortsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShortsPlay"
              component={ShortsPlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Channels"
              component={Channels}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Library"
              component={Library}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
