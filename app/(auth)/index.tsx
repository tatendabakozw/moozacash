import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const Welcome = (props: Props) => {
  const inserts = useSafeAreaInsets();
  return (
    <View
      style={[
        tw`bg-[${Colors.light.background}] h-full px-6`,
        {
          paddingTop: inserts.top,
        },
      ]}
    >
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
