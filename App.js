/**
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {
  FAB,
  Portal,
  Dialog,
  Button as RNPButton,
  Provider as PaperProvider,
} from 'react-native-paper';

const App: () => React$Node = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <RNPButton onPress={() => setDialogVisible(true)}>
          OPEN DIALOG
        </RNPButton>
        <FAB style={styles.fab} icon="add" onPress={() => console.log('FAB')} />
        <Portal>
          <Dialog dismissable={false} visible={dialogVisible}>
            <Dialog.Title>DIALOG</Dialog.Title>
            <Dialog.Content>
              <Text>{'Are you sure you want to close this?'}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              {/* FIXME: try to comment RNPButton and decomment Button to FIX the issue */}
              <RNPButton onPress={() => setDialogVisible(false)}>OK</RNPButton>
              {/* <Button onPress={() => setDialogVisible(false)} title={'OK'} /> */}
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default App;
