import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import {BlogProvider} from "./src/context/BlogContext";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen}  options={{ title: 'Blogs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center",
    justifyContent: "center",
  },
});

export default () => {
  return (
  <BlogProvider>
    <App />
    </BlogProvider>
    ) ;
};
