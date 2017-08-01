// @flow

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { DialogTitle as PopupDialogTitle } from 'react-native-popup-dialog';
import type { DialogTitleType as PopupDialogTitleType } from 'react-native-popup-dialog';

const scale = Dimensions.get('window').width / 375;

function normalize(size: number) {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
  },
  titleTextStyle: {
    fontSize: normalize(17),
    lineHeight: normalize(23),
  },
});

function DialogTitle({
  title,
  titleStyle,
  titleTextStyle,
  titleAlign,
  haveTitleBar,
}: PopupDialogTitleType) {
  return (
    <PopupDialogTitle
      title={title}
      titleStyle={[styles.title, titleStyle]}
      titleTextStyle={[styles.titleTextStyle, titleTextStyle]}
      titleAlign={titleAlign}
      haveTitleBar={haveTitleBar}
    />
  );
}

DialogTitle.defaultProps = {
  titleAlign: 'center',
  haveTitleBar: false,
};

export default DialogTitle;
