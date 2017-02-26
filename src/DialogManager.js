// @flow

import React from 'react';
import RootSiblings from 'react-native-root-siblings';

import DialogComponent from './DialogComponent';

const DESTROY_TIMEOUT: number = 500;

class DialogManager {
  constructor() {
    this.dialogs = [];
  }

  get currentDialog() {
    return this.dialogs[this.dialogs.length - 1];
  }

  add(props, callback): void {
    const dialog = new RootSiblings(
      <DialogComponent
        {...props}
        onDismissed={() => { this.onDialogDismissed(props.onDismissed); }}
      />,
      callback,
    );
    this.dialogs.push(dialog);
  }

  destroy(): void {
    const dialog = this.dialogs.pop();
    setTimeout(() => {
      dialog.destroy();
    }, DESTROY_TIMEOUT);
  }

  onDialogDismissed = (onDismissed?: Function = () => {}): void => {
    onDismissed();
    this.destroy();
  }

  update = (props: Object, callback?: Function = () => {}): void => {
    this.currentDialog.update(
      <DialogComponent
        {...props}
        onDismissed={() => { this.onDialogDismissed(props.onDismissed); }}
      />,
      callback,
    );
  }

  show = (props: Object, callback?: Function = () => {}): void => {
    this.add({
      ...props,
      show: true,
    }, callback);
  }

  dismiss = (callback?: Function = () => {}): void => {
    this.update({
      show: false,
    }, callback);
  }

  dismissAll = (callback?: Function = () => {}): void => {
    this.dialogs.forEach(() => {
      this.dismiss(callback);
    });
  }
}

export default DialogManager;
