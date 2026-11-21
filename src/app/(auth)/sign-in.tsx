import { View, Text } from "react-native";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Sign In</Text>
      <Link href="/(auth)/sign-up" className="mt-5 rounded bg-primary text-white p-4">
        Create Account
      </Link>
      <Link href="/" className="mt-5 rounded bg-primary text-white p-4">Back to Home</Link>
    </View>
  );
};

export default SignIn;
