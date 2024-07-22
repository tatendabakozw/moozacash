import { StyleSheet, Text, View } from "react-native";
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

type Props = {};

const Regsiter = (props: Props) => {
  const inserts = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [show_password, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!show_password);
  };

  const registerWithEmail = async () => {
    try {
      setLoading(true);
      // TODO - auth logic
      setError(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        tw`bg-[${Colors.light.primary}] relative h-full items-center justify-center `,
        {
          paddingTop: inserts.top,
        },
      ]}
    >
      <View style={tw`p-4 absolute  w-full z-50`}>
        <View
          style={tw`bg-white  rounded-2xl shadow-sm border border-zinc-200/50 p-4 gap-6`}
        >
          <Text
            style={tw`text-[${Colors.light.primary}] text-3xl font-bold text-center`}
          >
            MOOZACASH
          </Text>
          <CustomInput
            value={first_name}
            setValue={setFirstName}
            placeholder="First name"
            label="First name"
          />
          <CustomInput
            value={last_name}
            setValue={setLastName}
            placeholder="Last name"
            label="Last name"
          />
          <CustomInput
            value={phone}
            setValue={setPhone}
            placeholder="Phone number"
            label="Phone Number"
          />
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
            text="Register"
            onPress={registerWithEmail}
            loading={loading}
            error={error}
          />
          <OrDivider />
          <SecondaryButton
            text="Login Instead"
            onPress={() => router.push("login")}
            loading={loading}
            error={error}
          />
        </View>
      </View>
      <View
        style={tw`bg-zinc-100 rounded-t-3xl absolute z-10 bottom-0 w-full h-60`}
      />
    </View>
  );
};

export default Regsiter;

const styles = StyleSheet.create({});
