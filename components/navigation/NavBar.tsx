import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  View,
  Platform,
} from "react-native";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const NavBar = ({ navigation, back, options, route }: any) => {
  const insets = useSafeAreaInsets();
  const [searchClicked, setSearchClicked] = useState(false);
  const toggleSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSearchClicked((prev) => !prev);
  };

  return (
    <View
      style={[
        tw`${
          searchClicked ? `bg-white border-b border-zinc-200/50 ` : "bg-zinc-50"
        } flex flex-col px-4 gap-6 pb-4`,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      {searchClicked ? (
        <View
          style={tw`flex flex-row items-center bg-white px-3 gap-4 rounded-full`}
        >
          <AntDesign name="search1" size={20} color="#52525b" />
          <TextInput
            style={tw`p-3 rounded-full flex-1`}
            placeholder="Search "
          />
          <TouchableOpacity activeOpacity={0.7} onPress={toggleSearch}>
            <Feather name="x" size={24} color="#52525b" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={tw`flex flex-row items-center gap-2`}>
          <TouchableOpacity
            onPress={toggleSearch}
            activeOpacity={0.7}
            style={tw`flex flex-row items-center bg-white p-3 flex-1 gap-4 rounded-full border border-zinc-200/50`}
          >
            <AntDesign name="search1" size={20} color="#52525b" />
            <Text style={tw`rounded-full text-zinc-400`}>Search</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
