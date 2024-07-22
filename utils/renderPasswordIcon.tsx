import { Ionicons } from "@expo/vector-icons";

export const renderPasswordIcon = (showPassword: boolean) => {
  return showPassword ? (
    <Ionicons name="eye" size={24} color="#a1a1aa" />
  ) : (
    <Ionicons name="eye-off" size={24} color="#a1a1aa" />
  );
};
