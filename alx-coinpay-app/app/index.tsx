import { Text, View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function Index() {
  const swipeRight = Gesture.Pan().onEnd((event) => {
    if (event.translationX > 100) {
      router.push("/(onboarding)");
    }
  });
  return (
    <GestureDetector gesture={swipeRight}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
        <Text
          onPress={() => router.push("/(onboarding)/page1")}
          style={styles.Text}
        >
          CoinPay
        </Text>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "white",
    fontWeight: "500",
  },
});
