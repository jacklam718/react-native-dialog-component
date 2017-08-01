// @flow

import React from 'react';
import { StyleSheet } from 'react-native';
import { DialogButton as PopupDialogButton } from 'react-native-popup-dialog';
import type { DialogButtonType as PopupDialogButtonType } from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  textContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

function DialogButton({
  text,
  align,
  onPress,
  buttonStyle,
  textStyle,
  textContainerStyle,
  disabled,
  activeOpacity,
}: PopupDialogButtonType) {
  return (
    <PopupDialogButton
      text={text}
      align={align}
      onPress={onPress}
      buttonStyle={buttonStyle}
      textStyle={textStyle}
      textContainerStyle={[styles.textContainerStyle, textContainerStyle]}
      disabled={disabled}
      activeOpacity={activeOpacity}
    />
  );
}

export default DialogButton;
