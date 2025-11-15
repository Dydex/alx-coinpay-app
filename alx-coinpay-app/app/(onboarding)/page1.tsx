import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { router } from "expo-router";
import Indicator from "@/components/Indicator";

export default function onboardingPageOne() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTwo}>
          <View style={styles.imageGroup}>
            <Image source={require("@/assets/images/Clip path group.png")} />
          </View>

          <Indicator activeIndex={0} />

          <Text style={styles.text}>
            Trusted by millions of people, part of one part
          </Text>

          <Button
            title="Next"
            bg="blue"
            color="#FFF"
            onPress={() => router.push("/(onboarding)/page2")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerTwo: {
    flex: 1,
    gap: 20,
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontWeight: 600,
    fontSize: 39,
  },
  imageGroup: {
    alignItems: "center",
  },
});
