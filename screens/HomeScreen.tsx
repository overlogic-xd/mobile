import * as React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { Text, View } from "../components/Themed";
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
    const [panelProps, setPanelProps] = React.useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
      });
      const [isPanelActive, setIsPanelActive] = React.useState(false);
    
      const openPanel = () => {
        setIsPanelActive(true);
      };
    
      const closePanel = () => {
        setIsPanelActive(false);
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to React Native!</Text>
          <Text style={styles.separator} >To get started, edit App.js</Text>
          <SwipeablePanel {...panelProps} isActive={isPanelActive}>
            <Text>Hello world</Text>
          </SwipeablePanel>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });