import React from "react";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
        }}
      />
    </Stack>
  );
}
