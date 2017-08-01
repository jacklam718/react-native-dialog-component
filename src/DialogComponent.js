// @flow

import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import type { DialogType } from 'react-native-popup-dialog';

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

    this.show = this.show.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  show(onShown) {
    this.popupDialog.show(onShown);
  }

  dismiss(onDismissed) {
    this.popupDialog.dismiss(onDismissed);
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
        dismissOnHardwareBackPress={this.props.dismissOnHardwareBackPress}
        dismissOnTouchOutside={this.props.dismissOnTouchOutside}
        haveOverlay={this.props.haveOverlay}
        show={this.props.show}
        onShown={this.props.onShown}
        onDismissed={this.props.onDismissed}
        actions={this.props.actions}
      >
        {title}
        {children}
      </PopupDialog>
    );
  }
}

export default DialogComponent;
