import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Feather } from "@expo/vector-icons";
import NavBar from "@/components/navigation/NavBar";
import { Platform, Text } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  // @ts-ignore
  return <Feather size={28} style={{ marginBottom: 3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case "send":
              label = "Send";
              break;
            case "receive":
              label = "Cashout";
              break;
            case "analytics":
              label = "Analytics";
              break;
            case "profile":
              label = "Profile";
              break;

            default:
              label = "Send";
              break;
          }

          return (
            <Text
              style={{
                fontSize: 13,
                paddingBottom: 10,
                color: focused ? Colors.light.primary : "#334155",
                fontWeight: "bold",
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: "#334155",

        headerShown: useClientOnlyValue(false, true),
        header: (props) => <NavBar {...props} route={route} />,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 15 : 10,
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderColor: "#f4f4f5",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 1, height: -2 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        },
        tabBarShowLabel: true,
      })}
    >
      <Tabs.Screen
        name="send"
        options={{
          title: "Send",
          tabBarIcon: ({ color }) => <TabBarIcon name="upload" color={color} />,
        }}
      />
      <Tabs.Screen
        name="receive"
        options={{
          title: "Cashout",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="download" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
