import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//Importaçao das paginas
import Login from "./Views/Login/Login";
import Feed from "./Views/Feed/Feed";
import Cadastro from "./Views/Cadastro/Cadastro";

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from "react-native-vector-icons/Ionicons";

// (...)

export default function Routes(props) {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const TabTop = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <TabTop.Navigator>
        <TabTop.Screen name="Perfil" component={Cadastro} />
        <TabTop.Screen name="Empreendimentos" component={Feed} />
      </TabTop.Navigator>
    );
  }

  function TabContainer() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Cadastro") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              headerTitleAlign: "center",
              title: "Feeds",
            }}
          />
          <Tab.Screen
            name="Cadastro"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerTitleAlign: "center",
            title: "New user",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
