import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const index = (props: Props) => {
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
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
