import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

type Props = {
  name: string;
  amount: number;
  date: string;
  type: string;
};

const TransactionItem = (props: Props) => {
  return (
    <View style={tw`flex flex-row items-center gap-4`}>
      <View
        style={tw`flex flex-row items-center h-12 w-12 rounded-lg bg-emerald-200 content-center justify-center`}
      >
        <Text style={tw`text-slate-950 font-bold text-lg`}>
          {props.name[0]}
        </Text>
      </View>
      <View style={tw`flex-1 gap-1`}>
        <Text style={tw`text-slate-950 font-bold`}>{props.name}</Text>
        <Text style={tw`text-slate-400 text-xs font-semibold`}>
          {props.date}
        </Text>
      </View>
      {props.type === "cashout" ? (
        <Text style={tw`font-semibold text-lg`}>${props.amount}</Text>
      ) : (
        <Text style={tw`font-semibold text-lg`}>${props.amount}</Text>
      )}
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
