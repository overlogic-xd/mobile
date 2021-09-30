import { Actionsheet, useDisclose } from "native-base";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { View, Text } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width,
    height,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ["25%", "50%"], []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
