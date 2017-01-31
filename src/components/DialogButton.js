// @flow

import React from 'react';
import { StyleSheet } from 'react-native';
import * as PopupDialog from 'react-native-popup-dialog';

type Param = {
  text: string;
  align: string;
  onPress: Function;
  buttonStyle: Object | number;
  textStyle: Object | number;
  textContainerStyle: Object | number;
  disabled: Boolean;
  activeOpacity: number;
};

function DialogButton({ text, align, onPress, buttonStyle, textStyle, textContainerStyle, disabled, activeOpacity }: Param) {
  return (
    <PopupDialog.DialogButton
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

const styles = StyleSheet.create({
  textContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default DialogButton;
