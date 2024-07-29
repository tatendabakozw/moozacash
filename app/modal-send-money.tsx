import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Keypad from "@/components/keypad/Keypad";
import { Feather } from "@expo/vector-icons";
import SwipeToSend from "@/components/buttons/SwipeToSend";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const SendMoney = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`flex flex-col h-full bg-slate-50 w-full gap-4 p-4`,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={tw`flex flex-row items-center justify-between`}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={tw`bg-zinc-100 rounded-full p-2`}
        >
          <Feather name="arrow-left" size={24} color="#020617" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-semibold`}>Send Money</Text>
        <View style={tw`h-10 w-10`} />
      </View>
      <View style={tw`flex flex-row items-center w-full gap-4`}>
        <View style={tw`h-15 w-15 rounded-2xl bg-green-200`} />
        <View style={tw`flex flex-col flex-1`}>
          <Text style={tw`text-lg font-bold text-slate-950`}>Tatenda Bako</Text>
          <Text style={tw` text-slate-500`}>tatenda.bako@afrisight.com</Text>
        </View>
        <Feather name="chevron-right" size={24} color="black" />
      </View>
      <View style={tw`flex-1`} />
      <Keypad />
      <SwipeToSend />
    </View>
  );
};

export default SendMoney;

const styles = StyleSheet.create({});
