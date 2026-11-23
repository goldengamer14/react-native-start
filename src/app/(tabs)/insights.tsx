import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

export const SafeAreaView = styled(RNSafeAreaView);

const insights = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Insights about us</Text>
    </SafeAreaView>
  );
};

export default insights;
