import { View, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Subscription Details for: {id}</Text>
      <Link href="/" className="mt-5 rounded bg-primary text-white p-4">
        Go Back
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
