import React from 'react';
import { StyleSheet, Dimensions, FlatList, SectionList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';
import { View, Text, TextInput } from "../components/Themed";

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    // variables
    const snapPoints = React.useMemo(() => [160, '90%'], []);

    // renders
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <BottomSheet
                animateOnMount={true}
                snapPoints={snapPoints}
                style={styles.panel}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Пошук екскурсій</Text>
                    <TextInput style={styles.input} placeholder="Пошук екскурсій за визначною пам'яткою" />
                    <Text style={styles.subtitle}>Популярні</Text>
                    <SectionList
                        sections={[
                            {
                              title: "Main dishes",
                              data: ["lorem"]
                            },
                            {
                              title: "Sides",
                              data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                            },
                            {
                              title: "Drinks",
                              data: ["Water", "Coke", "Beer"]
                            },
                            {
                              title: "Desserts",
                              data: ["Cheese Cake", "Ice Cream"]
                            }
                          ]}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Text>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.item}>{title}</Text>
                        )}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20
    },
    item: {
        fontSize: 20
    },
    input: {
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        borderRadius: 4
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 26,
        marginTop: 24,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    panel: {
        shadowColor: "#ff00",
        shadowOpacity: 2,
        shadowRadius: 2
    },
    map: { width, height }
});
