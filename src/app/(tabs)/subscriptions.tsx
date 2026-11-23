import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

export const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Link
        href="/subscriptions/spotify"
        className="mt-5 rounded bg-primary text-white p-4"
      >
        {" "}
        Spotify Subscription{" "}
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-5 rounded bg-primary text-white p-4"
      >
        {" "}
        Claude Max Subscription{" "}
      </Link>
    </SafeAreaView>
  );
};

export default subscriptions;
