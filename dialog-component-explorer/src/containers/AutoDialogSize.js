import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DialogComponent, { DialogContent } from 'react-native-dialog-component';

import Button from '../components/Button';

export default class AutoDialogSize extends Component {

  openDialogA = () => {
    this.dialogA.openDialog();
  }

  openDialogB = () => {
    this.dialogB.openDialog();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            text="Open Dialog A"
            onPress={this.openDialogA}
          />

          <Button
            text="Open Dialog B"
            onPress={this.openDialogB}
          />
        </View>

        <DialogComponent
          title="Dialog"
          titleAlign="center"
          width={null}
          height={null}
          ref={dialog => this.dialogA = dialog}
        >
          <Text>
            Hello
          </Text>
        </DialogComponent>

        <DialogComponent
          title="Dialog With DialogContent"
          titleAlign="center"
          width={null}
          height={null}
          ref={dialog => this.dialogB = dialog}
        >
          <DialogContent>
            <Text>
              Hello
            </Text>
          </DialogContent>
        </DialogComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
