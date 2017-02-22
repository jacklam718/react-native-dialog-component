import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import DialogComponent from './DialogComponent';

export default class DialogManager {
  constructor(props?: Object = {}) {
    this.props = { ...props, show: false };
    this.dialogs = [];
  }

  get currentDialog() {
    return this.dialogs[this.dialogs.length - 1];
  }

  add(props: Object, callback?: Function = () => {}): void {
    const dialog = new RootSiblings(
      <DialogComponent {...props} />, () => {
        callback();
      });

    this.dialogs.push(dialog);
  }

  update(props: Object, callback?: Function = () => {}): void {
    this.currentDialog.update(<DialogComponent {...props} />, () => {
      callback();
    });
  }

  show(props?: Object = {}, callback?: Function = () => {}): void {
    const newProps = { ...this.props, ...props, show: true };
    this.add(newProps, callback);
  }

  dismiss(callback?: Function = () => {}) {
    const props = { ...this.props, show: false };
    this.update(props, () => {
      callback();
    });

    setTimeout(() => {
      const dialog = this.dialogs.pop();
      dialog.destroy();
    }, 2000);
  }
}
