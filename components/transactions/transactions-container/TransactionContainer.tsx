import { StyleSheet, Text, View } from "react-native";
import React from "react";

import tw from "twrnc";
import TransactionItem from "../transaction-item";

const transactions = [
  {
    name: "Tatenda  Bako",
    amount: 2.0,
    date: "10/10/2024",
    type: "sent",
    id: "asd",
  },
  {
    name: "Panashe Mugomba",
    amount: 422.6,
    date: "1/6/2024",
    type: "cashout",
    id: "q21",
  },
];

const TransactionContainer = () => {
  return (
    <View style={tw`gap-4`}>
      {transactions.map((item) => (
        <TransactionItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          date={item.date}
          type={item.type}
        />
      ))}
    </View>
  );
};

export default TransactionContainer;

const styles = StyleSheet.create({});
