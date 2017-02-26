import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DialogComponent, DialogContent } from 'react-native-dialog-component';

import Button from '../components/Button';

export default class FixedDialogSize extends Component {

  showA = () => {
    this.dialogA.show();
  }

  showB = () => {
    this.dialogB.show();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            text="Open Dialog A"
            onPress={this.showA}
          />

          <Button
            text="Open Dialog B"
            onPress={this.showB}
          />
        </View>

        <DialogComponent
          title="Fixed Dialog Size"
          titleAlign="center"
          height={300}
          width={300}
          ref={dialog => this.dialogA = dialog}
        >
          <Text>
            Hello
          </Text>
        </DialogComponent>

        <DialogComponent
          title="Fixed Dialog Size Width Percentage"
          titleAlign="center"
          width={1.0}
          height={0.4}
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
