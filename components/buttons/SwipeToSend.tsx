import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import tw from "twrnc";
import Colors from "@/constants/Colors";

const windowWidth = Dimensions.get("window").width;

const SwipeToSend: React.FC = () => {
  const translateX = useSharedValue(0);
  const hasTriggered = useRef(false);

  const handleSendAction = useCallback(() => {
    if (!hasTriggered.current) {
      console.log("Send action triggered!");
      hasTriggered.current = true;
    }
  }, []);

  //   const startTimer = useCallback(() => {
  //     if (timerRef.current === null) {
  //       timerRef.current = setTimeout(() => {
  //         handleSendAction();
  //         timerRef.current = null;
  //       }, 2000);
  //     }
  //   }, [handleSendAction]);

  const resetTrigger = useCallback(() => {
    hasTriggered.current = false;
  }, []);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number }
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      runOnJS(resetTrigger)();
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      if (translateX.value > windowWidth - 100) {
        runOnJS(handleSendAction)();
      }
    },
    onEnd: () => {
      translateX.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View
      style={[tw`bg-slate-100 border border-zinc-200/50`, styles.container]}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle]}>
          <View style={tw`bg-[${Colors.light.primary}] rounded-xl p-4`}>
            <Feather name="chevrons-right" size={24} color="white" />
          </View>
        </Animated.View>
      </PanGestureHandler>
      <View style={tw`flex-1 items-center`}>
        <Text style={tw`text-slate-400 font-semibold`}>swipe to send</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    borderRadius: 15,
  },
});

export default SwipeToSend;
