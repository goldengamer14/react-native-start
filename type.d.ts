import type { ImageProps } from "expo-image";

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: NonNullable<ImageProps["source"]>;
  }
}

export {};
