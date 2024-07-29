import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CheckBox from "@/components/check-box/CheckBox";
import { router } from "expo-router";
import CustomInput from "@/components/inputs/CustomInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { renderPasswordIcon } from "@/utils/renderPasswordIcon";
import OrDivider from "@/components/dividers/OrDivider";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { BACKEND_API_GATEWAY_URL } from "@/constants/Application";

type Props = {};

const Logiin = (props: Props) => {
  const inserts = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [show_password, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!show_password);
  };

  const signInWithUsername = async () => {
    try {
      // setLoading(true);
      // Obtain a JWT token from your Spring Boot backend
      // const response = await fetch(
      //   `${BACKEND_API_GATEWAY_URL}api/v1/token/fetch/`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       username: username,
      //       password: password,
      //     }),
      //   }
      // );
      // const data = await response.text();
      // console.log(data);
      // if (response.ok) {
      //   Alert.alert("Login Successful");
      //   // router.push("(tabs)");
      //   setLoading(false);
      //   setError(false);
      //   // Save the token to secure store or use it as needed
      // } else {
      //   setLoading(false);
      //   setError(true);
      //   Alert.alert("Login Failed");
      // }

      router.push("(tabs)/send");
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      setError(true);
      setLoading(false);
    }
  };
  return (
    <View
      style={[
        tw`bg-white relative h-full items-center justify-center `,
        {
          paddingTop: inserts.top,
        },
      ]}
    >
      <ExpoStatusBar style="dark" />
      <View style={tw`p-4 absolute  w-full z-50`}>
        <View
          style={tw`bg-white  border border-zinc-200/50 rounded-2xl p-4 gap-6`}
        >
          <Text
            style={tw`text-[${Colors.light.primary}] text-3xl font-bold text-center`}
          >
            MOOZACASH
          </Text>

          <CustomInput
            value={username}
            setValue={setUsername}
            placeholder="Username"
            label="Username"
          />
          <CustomInput
            icon={renderPasswordIcon(show_password)}
            value={password}
            setValue={setPassword}
            onIconPress={toggleShowPassword}
            isPassword={!show_password}
            placeholder="******"
            label="Password"
          />
          <View style={tw`flex flex-row items-center justify-between w-full`}>
            <View style={tw`flex flex-row gap-2 items-center`}>
              <CheckBox isChecked={isSelected} setIsChecked={setSelection} />
              <Text style={tw`text-zinc-500 text-xs`}>
                Agree to terms and conditions
              </Text>
            </View>
          </View>
          <PrimaryButton
            text="Log In"
            onPress={signInWithUsername}
            loading={loading}
            error={error}
          />
          <OrDivider />
          <SecondaryButton
            text="Register Instead"
            onPress={() => router.push("register")}
          />
        </View>
      </View>
      <View
        style={tw`bg-[${Colors.light.secondary}]/20 rounded-bl-full rounded-tl-full  absolute top-0 right-0 bottom-0 w-40 h-60`}
      />
      <View
        style={tw`bg-zinc-50 rounded-t-3xl absolute z-10 bottom-0 w-full h-60`}
      />
    </View>
  );
};

export default Logiin;

const styles = StyleSheet.create({});
