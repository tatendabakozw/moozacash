import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AbstractIllustration from "@/assets/svgs/AbstractIllustration";
import { router } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

type Props = {};

const Welcome = (props: Props) => {
  const inserts = useSafeAreaInsets();
  return (
    <View
      style={[
        tw`bg-zinc-50 h-full px-6 items-center justify-center`,
        {
          paddingTop: inserts.top,
        },
      ]}
    >
      <ExpoStatusBar style="dark" />
      <View style={tw` rounded-full`}>
        <AbstractIllustration />
      </View>
      <View style={tw`flex-col gap-4 items-center w-full pt-8`}>
        <Text
          style={[
            tw`text-3xl text-zinc-950`,
            {
              fontWeight: "900",
            },
          ]}
        >
          Moozacash
        </Text>
        <Text style={tw`text-zinc-700 text-lg text-center`}>
          Financial digital platform that provides unmatched customer experience
          for its clients.
        </Text>
        <View style={tw`h-4`} />
        <TouchableOpacity
          onPress={() => router.push("register")}
          activeOpacity={0.7}
          style={tw`bg-[${Colors.light.primary}] w-full p-4 rounded-2xl`}
        >
          <Text style={tw`text-center font-bold  text-white text-lg`}>
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("login")}
          activeOpacity={0.7}
          style={tw`bg-white border border-zinc-200/50 w-full p-4 rounded-2xl`}
        >
          <Text style={tw`text-center font-bold  text-zinc-950 text-lg`}>
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
