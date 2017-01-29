import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DialogComponent, { DialogButton } from 'react-native-dialog-component';
import Button from './Button';

export default class DialogComponentExample extends Component {
  constructor(props) {
    super(props);

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.dialogComponent.openDialog();
  }

  closeDialog() {
    this.dialogComponent.closeDialog();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          text="Open Dialog"
          onPress={this.openDialog}
        />

        <DialogComponent
          title="Title"
          actions={[
            <DialogButton
              key={0}
              text="Close"
              align="center"
              onPress={this.closeDialog}
            />,
          ]}
          ref={(dialogComponent) => {
            this.dialogComponent = dialogComponent;
          }}
        >
          <View style={styles.dialogContentView}>
            <Text>Default Animation</Text>
            <Text>Default Animation</Text>
            <Text>Default Animation</Text>
            <Text>Default Animation</Text>
            <Text>Default Animation</Text>
            <Text>Default Animation</Text>
          </View>
        </DialogComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
