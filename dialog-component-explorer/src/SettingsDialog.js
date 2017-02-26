// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DialogComponent, DialogContent } from 'react-native-dialog-component';
import _ from 'lodash';

import SettingsDialogTitle from './components/SettingsDialogTitle';
import SettingsDialogSize from './components/SettingsDialogSize';
import SettingsDialogAnimation from './components/SettingsDialogAnimation';
import SettingsDialogContent from './components/SettingsDialogContent';

type Props = {
  onSettingsUpdated: Function;
  onViewSettings: Function;
}

export default class SettingsDialog extends Component {
  props: Props;
  static defaultProps = {
    onSettingsUpdated: () => null,
  }

  constructor(props) {
    super(props);

    this.onDialogSizeSettingsUpdated = this.onDialogSizeSettingsUpdated.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  show = () => {
    this.dialog.show();
  }

  dismiss = () => {
    this.dialog.dismiss();
  }

  onDialogSizeSettingsUpdated(settings) {
    this.setState({ ...settings });
    this.props.onSettingsUpdated({ ...settings });
  }

  renderTitle() {
    return (
      <View style={[styles.title, styles.titleBar]}>
        <View style={styles.titleTextContainer}>
          <Text style={[styles.titleText]}>
            Settings
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.onViewSettings}>
            <Text>
              View Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DialogComponent
        title="Settings To Preview The Effects"
        titleTextStyle={styles.dialogTitleText}
        haveTitleBar
        width={0.8}
        height={0.6}
        ref={(dialog) => {
          this.dialog = dialog;
        }}
      >
        <ScrollView>
          <DialogContent>
            <SettingsDialogTitle
              {...this.state}
              onSettingsUpdated={this.onDialogSizeSettingsUpdated}
            />

            <SettingsDialogContent
              {...this.state}
              onSettingsUpdated={this.onDialogSizeSettingsUpdated}
            />

            <SettingsDialogSize
              {...this.state}
              onSettingsUpdated={this.onDialogSizeSettingsUpdated}
            />

            <SettingsDialogAnimation
              {...this.state}
              onSettingsUpdated={this.onDialogSizeSettingsUpdated}
            />
          </DialogContent>
        </ScrollView>
      </DialogComponent>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    flexDirection: 'row',
  },
  titleBar: {
    padding: 14,
    borderBottomWidth: 0.5,
    backgroundColor: '#F9F9FB',
    borderColor: '#DAD9DC',
  },
  titleText: {
    color: '#7F7D89',
    fontSize: 16,
    position: 'absolute',
    alignSelf: 'center',
  },
  titleTextContainer: {
    flex: 1,
    // alignItems: 'center',
    // right: 0,
    // left: 0,
  },
  dialogTitleText: {
    fontSize: 16,
  },
});
