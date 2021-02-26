import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "./screens/WelcomeScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { AppTabNavigator } from "./components/AppTabNavigator";
// import Animated, {
//   Easing as OldEasing,
//   // @ts-ignore
//   EasingNode,
// } from 'react-native-reanimated';
//
// const Easing = EasingNode || OldEasing;

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator }
});

const AppContainer = createAppContainer(switchNavigator);
