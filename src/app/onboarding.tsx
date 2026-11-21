import { View, Text } from "react-native";
import { Link } from "expo-router";

const onBoarding = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">I use Arch, btw!</Text>
      <Link href="/" className="mt-5 rounded bg-primary text-white p-4">
        {" "}
        Back to Home{" "}
      </Link>
    </View>
  );
};

export default onBoarding;
