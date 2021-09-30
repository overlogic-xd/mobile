import React from "react";
import { Box, Heading, Image, Stack, Text } from "native-base";

export default function CategoryCard() {
    return (
        <Box
            bg="white"
            shadow={2}
            rounded="lg"
            maxWidth="90%"
        >
            <Image source={{ uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png" }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
            <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
                NEWS
            </Text>
            <Stack space={4} p={[4, 4, 8]}>
                <Text color="gray.400">June 22, 2021</Text>
                <Heading size={["md", "lg", "md"]} noOfLines={2}>
                    The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
                    Floating in Air
                </Heading>
                <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
                    With lush green meadows, rivers clear as crystal, pine-covered
                    hills, gorgeous waterfalls, lakes and majestic forests, the
                    mesmerizing. Meghalaya is truly a Nature lover’s paradise…
                </Text>
            </Stack>
        </Box>
    );
}