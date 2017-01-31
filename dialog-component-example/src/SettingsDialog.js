import React, { Component } from 'react';
import { View } from 'react-native';
import DialogComponent, { DialogContent } from 'react-native-dialog-component';

export default class SettingsDialog extends Component {
  openDialog = () => {
    this.dialog.openDialog();
  }

  clsoeDialog = () => {
    this.dialog.clsoeDialog();
  }

  render() {
    return (
      <DialogComponent
        title="Settings"
        width={0.8}
        height={null}
        ref={dialog => this.dialog = dialog}
      >
        <DialogContent />
      </DialogComponent>
    );
  }
}
