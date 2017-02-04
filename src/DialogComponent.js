// @flow

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PopupDialog, { Dialog } from 'react-native-popup-dialog';

import DialogTitle from './components/DialogTitle';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const propTypes = {
  ...Dialog.propTypes,
  ...DialogTitle.propTypes,
  dialogContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

const defaultProps = {
  animationDuration: 200,
  closeOnTouchOutside: true,
  width: screenWidth,
  height: null,
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
    let { title, children } = this.props;

    if (title && typeof title === 'string') {
      title = (
        <DialogTitle {...this.props} />
      );
    }

    if (title && title.type && title.type.name === 'DialogTitle' && !title.props.haveTitleBar) {
      if (children && children.type && children.type.name === 'DialogContent') {
        const props = {
          ...children.props,
          contentStyle: [{ paddingTop: 0 }, children.props.contentStyle],
        };

        const content = children.props.children;

        children = React.cloneElement(
          children,
          props,
          content,
        );
      }
    }

    return (
      <PopupDialog
        ref={popupDialog => { this.popupDialog = popupDialog; }}
        width={this.props.width}
        height={this.props.height}
        dialogAnimation={this.props.dialogAnimation}
        dialogStyle={[styles.dialog, this.props.dialogStyle]}
        animationDuration={this.props.animationDuration}
        overlayPointerEvents={this.props.overlayPointerEvents}
        overlayBackgroundColor={this.props.overlayBackgroundColor}
        overlayOpacity={this.props.overlayOpacity}
        closeOnTouchOutside={this.props.closeOnTouchOutside}
        haveOverlay={this.props.haveOverlay}
        open={this.props.open}
        onOpened={this.props.onOpened}
        onClosed={this.props.onClosed}
        actions={this.props.actions}
      >
        {title}
        {children}
      </PopupDialog>
    );
  }
}

const styles = StyleSheet.create({
  dialog: {
    elevation: 5,
    minHeight: 96,
    borderRadius: 0,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  dialogContainer: {
    flex: 1,
  },
});

export default DialogComponent;
