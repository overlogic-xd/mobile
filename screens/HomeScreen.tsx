import * as React from "react";
import {
  Heading,
  Input,
  ScrollView,
  Stack,
  Text,
  View,
  SectionList,
  Skeleton
} from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Geojson, GeojsonProps } from "react-native-maps";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { RootStackScreenProps } from "../types";
import CategoryBlock from "../components/CategoryBlock";
import CategoryCard from "../components/CategoryCard";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  map: {
    width,
    height,
  },
});

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  React.useEffect(
    () =>
      searchQuery.length > 0 ? bottomSheetRef.current?.expand() : undefined,
    [searchQuery]
  );

  // variables
  const snapPoints = React.useMemo(() => [140, "90%"], []);

  const myPlace: GeojsonProps["geojson"] = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [64.165329, 48.844287],
        },
      },
    ],
  };

  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    }
  ];

  return (
    <View>
      <MapView
        showsUserLocation
        followsUserLocation
        showsMyLocationButton
        style={styles.map}
      >
        <Geojson
          geojson={myPlace}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
        />
      </MapView>
      <View>
        <Text>Hello world</Text>
      </View>
      <BottomSheet animateOnMount ref={bottomSheetRef} snapPoints={snapPoints}>
          <Stack px={4} space={8}>
            <Stack space={2}>
              <Heading>Екскурсії</Heading>
              <BottomSheetTextInput />
              {/* <Input
                placeholder="Пошук екскурсій"
                onChangeText={setSearchQuery}
              /> */}
            </Stack>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Text children={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Heading>{title}</Heading>
              )}
            />
          </Stack>
      </BottomSheet>
    </View>
  );
}
