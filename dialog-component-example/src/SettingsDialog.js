// @flow

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import DialogComponent, { DialogContent } from 'react-native-dialog-component';
import _ from 'lodash';

import SettingsDialogTitle from './components/SettingsDialogTitle';
import SettingsDialogSize from './components/SettingsDialogSize';
import SettingsDialogAnimation from './components/SettingsDialogAnimation';
import SettingsDialogContent from './components/SettingsDialogContent';

type Props = {
  onSettingsUpdated: Function;
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

  openDialog = () => {
    this.dialog.openDialog();
  }

  clsoeDialog = () => {
    this.dialog.clsoeDialog();
  }

  onDialogSizeSettingsUpdated(settings) {
    this.setState({ ...settings });
    this.props.onSettingsUpdated({ ...settings });
  }

  render() {
    return (
      <DialogComponent
        title="Settings"
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
