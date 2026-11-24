import "@/global.css";
import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

export const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-7xl font-sans-extrabold text-primary">Home</Text>
      <Link
        href="/onboarding"
        className="mt-5 font-sans-bold rounded bg-primary text-white p-4"
      >
        {" "}
        Go to OnBoarding{" "}
      </Link>
      <Link href="/sign-in" className="mt-5 font-sans-bold rounded bg-primary text-white p-4">
        {" "}
        Go to Sign in{" "}
      </Link>
      <Link href="/sign-up" className="mt-5 font-sans-bold rounded bg-primary text-white p-4">
        {" "}
        Go to Sign Up{" "}
      </Link>
    </SafeAreaView>
  );
}
