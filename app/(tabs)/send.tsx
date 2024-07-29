import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const Send = () => {
  const [amount, setAmount] = useState(0);
  return (
    <View style={tw`bg-slate-50 h-full pt-4 items-center gap-8`}>
      <View style={tw`items-center gap-4`}>
        <View
          style={tw`flex flex-row h-20 w-20 rounded-full bg-slate-100 border border-slate-200/50`}
        />
        <Text style={tw`text-slate-950 text-3xl font-bold `}>1000.00 USD</Text>

        <View style={tw`flex-row w-full gap-2 px-8`}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`bg-slate-950 gap-2 items-center justify-center flex-row items-center px-2 py-4 rounded-xl flex-1`}
          >
            <MaterialIcons name="call-made" size={24} color="white" />
            <Text style={tw`text-white text-lg`}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`bg-slate-950 gap-2 items-center justify-center  flex-row items-center px-2 py-4 rounded-xl flex-1`}
          >
            <MaterialIcons name="call-received" size={24} color="white" />
            <Text style={tw`text-white text-lg`}>Cashout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`bg-white border border-slate-200/50 gap-2 items-center justify-center  flex-row items-center px-4 py-4 rounded-full`}
          >
            <MaterialIcons name="swap-vert" size={24} color="#020617" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={tw`border-t border-slate-200/50 rounded-t-3xl p-6 gap-4 bg-white w-full flex-1 flex-col`}
      >
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-slate-700`}>Transactions</Text>
          <Feather name="chevron-right" size={16} color="#334155" />
        </View>
      </View>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({});
