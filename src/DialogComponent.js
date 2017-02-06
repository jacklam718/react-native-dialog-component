// @flow

import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import PopupDialog, { type DialogType } from 'react-native-popup-dialog';

import DialogTitle from './components/DialogTitle';

const { width: screenWidth } = Dimensions.get('window');

const ANIMATION_DURATION: number = 200;
const DEFAULT_WIDTH: number = screenWidth;
const DEFAULT_HEIGHT: ?number = null;

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

class DialogComponent extends Component {
  props: DialogType

  static defaultProps = {
    animationDuration: ANIMATION_DURATION,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  }

  constructor(props: DialogType) {
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
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
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

export default DialogComponent;
