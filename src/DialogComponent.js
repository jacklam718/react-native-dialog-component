import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import PopupDialog, { Dialog, DialogTitle, DialogButton } from 'react-native-popup-dialog';

const propTypes = {
  ...Dialog.propTypes,
  ...DialogTitle.propTypes,
};

const defaultProps = {
  animationDuration: 200,
  closeOnTouchOutside: true,
  minWidth: 0.8,
  maxWidth: 0.8,
  minHeight: 0.1,
  maxHeight: 0.4,
};

class DialogComponent extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog(onOpened) {
    this.popupDialog.openDialog(onOpened);
  }

  closeDialog(onClosed) {
    this.popupDialog.closeDialog(onClosed);
  }

  render() {
    let title;

    if (this.props.title) {
      title = (
        <DialogTitle
          title={this.props.title}
          titleStyle={this.props.titleStyle}
          titleTextStyle={this.props.titleTextStyle}
          titleAlign={this.props.titleAlign}
          haveTitleBar={false}
        />
      );
    }

    return (
      <PopupDialog
        dialogStyle={styles.dialog}
        ref={popupDialog => { this.popupDialog = popupDialog; }}
        {...this.props}
      >
        {title}
        {this.props.children}
      </PopupDialog>
    );
  }
}

const styles = StyleSheet.create({
  dialog: {
    elevation: 5,
    minHeight: 96,
    borderRadius: 0,
    opacity: 0,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
});

export default DialogComponent;
