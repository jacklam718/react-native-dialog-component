// @flow

import React, { Component } from 'react';
import { View, Text, Switch, Picker } from 'react-native';
import _ from 'lodash';
import Section from './Section';

type Props = {
  onSettingsUpdated: Function;
  haveTitleBar: boolean;
  titleAlign: string,
}

export default class SettingsDialogTitle extends Component {
  props: Props;

  static defaultProps = {
    onSettingsUpdated: () => null,
    haveTitleBar: false,
    titleAlign: 'center',
  }

  constructor(props) {
    super(props);

    this.state = {
      haveTitleBar: props.haveTitleBar,
      titleAlign: props.titleAlign,
    };

    this.dialogTitleBarSwitch = this.dialogTitleBarSwitch.bind(this);
    this.dialogTitleAlignPickerChange = this.dialogTitleAlignPickerChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  componentDidUpdate() {
    this.props.onSettingsUpdated({ ...this.state });
  }

  dialogTitleBarSwitch(value) {
    this.setState({ haveTitleBar: value });
  }

  dialogTitleAlignPickerChange(value) {
    this.setState({ titleAlign: value });
  }

  render() {
    return (
      <Section title="Dialog Title">
        <View>
          <Switch
            onValueChange={this.dialogTitleBarSwitch}
            value={this.state.haveTitleBar}
          />
          <Text>
            Title Bar: {`${this.state.haveTitleBar}`}
          </Text>
        </View>
        <View>
          <Picker
            selectedValue={this.state.titleAlign}
            onValueChange={this.dialogTitleAlignPickerChange}
          >
            <Picker.Item label="left" value="left" />
            <Picker.Item label="right" value="right" />
            <Picker.Item label="center" value="center" />
          </Picker>
          <Text>
            Dialog Animation: {`${this.state.titleAlign}`}
          </Text>
        </View>
      </Section>
    );
  }
}
