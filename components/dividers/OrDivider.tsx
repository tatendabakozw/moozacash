import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import React from "react";

const OrDivider = () => {
  return (
    <View style={tw`flex flex-row items-center gap-2`}>
      <View style={tw`flex-1 border-t border-zinc-300/50`} />
      <Text style={tw`text-xs text-zinc-500/50`}>Or </Text>
      <View style={tw`flex-1 border-t border-zinc-300/50`} />
    </View>
  );
};

export default OrDivider;

const styles = StyleSheet.create({});
