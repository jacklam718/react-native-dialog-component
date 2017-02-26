// @flow

import React from 'react';
import RootSiblings from 'react-native-root-siblings';

import DialogComponent from './DialogComponent';

class DialogManager {
  constructor() {
    this.dialogs = [];
  }

  get currentDialog() {
    return this.dialogs[this.dialogs.length - 1];
  }

  add(props, callback): void {
    const dialog = new RootSiblings(
      <DialogComponent {...props} />,
      callback,
    );
    this.dialogs.push(dialog);
  }

  update = (props: Object, callback?: Function = () => {}): void => {
    this.currentDialog.update(
      <DialogComponent {...props} />,
      callback,
    );
  }

  show = (props: Object, callback?: Function = () => {}): void => {

  }

  dismiss = (callback?: Function = () => {}): void => {
    callback();

    this.update({
      show: false,
      onClosed: () => {
        const dialog = this.dialogs.pop();
        dialog.destory();
      },
    });
  }
}

export default DialogManager;
