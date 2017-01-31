// @flow

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import * as PopupDialog from 'react-native-popup-dialog';

const scale = Dimensions.get('window').width / 375;

type Param = {
  title: string;
  titleStyle: Object;
  titleTextStyle: Object | number;
  titleAlign: 'left' | 'right' | 'center';
  haveTitleBar: boolean;
}

function DialogTitle({ title, titleStyle, titleTextStyle, titleAlign, haveTitleBar }: Param) {
  return (
    <PopupDialog.DialogTitle
      title={title}
      titleStyle={[styles.title, titleStyle]}
      titleTextStyle={[styles.titleTextStyle, titleTextStyle]}
      titleAlign={titleAlign}
      haveTitleBar={haveTitleBar}
    />
  );
}

function normalize(size: number) {
  return Math.round(scale * size);
}

DialogTitle.defaultProps = {
  titleAlign: 'center',
  haveTitleBar: false,
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
  },
  titleTextStyle: {
    fontSize: normalize(20),
    lineHeight: normalize(23),
  },
});

export default DialogTitle;
