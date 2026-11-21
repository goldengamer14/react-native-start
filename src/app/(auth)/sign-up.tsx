import { View, Text } from "react-native";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">Sign Up</Text>
      <Text>Already have an account?</Text>
      <Link href="/(auth)/sign-in" className="mt-5 rounded bg-primary text-white p-4">
        Log in
      </Link>
      <Link href="/" className="mt-5 rounded bg-primary text-white p-4">Back to Home</Link>
    </View>
  );
};

export default SignUp;
