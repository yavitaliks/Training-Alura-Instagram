import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//Importaçao das paginas
import Login from "./Views/Login/Login";
import Feed from "./Views/Feed/Feed";
import Cadastro from "./Views/Cadastro/Cadastro";
import NewPost from "./Views/Fotos/AddFotos";
import Perfil from "./Views/Perfil/Perfil";

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

              if (route.name === "New Post") {
                iconName = focused ? "md-add" : "md-add";
              } else if (route.name === "Feed") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Perfil") {
                iconName = focused ? "md-person" : "md-person";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#836FFF",
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
            name="New Post"
            component={NewPost}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={Perfil}
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
