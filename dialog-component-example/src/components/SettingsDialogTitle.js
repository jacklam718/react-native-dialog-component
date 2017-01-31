// @flow

import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import _ from 'lodash';
import Section from './Section';

type Props = {
  onSettingsUpdated: Function;
  haveTitleBar: boolean;
}

export default class SettingsDialogTitle extends Component {
  props: Props;

  static defaultProps = {
    onSettingsUpdated: () => null,
    haveTitleBar: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      haveTitleBar: props.haveTitleBar,
    };

    this.dialogTitleBarSwitch = this.dialogTitleBarSwitch.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  componentDidUpdate() {
    this.props.onSettingsUpdated({ ...this.state });
  }

  dialogTitleBarSwitch(value) {
    this.setState({ haveTitleBar: value });
    if (value) {
      this.setState({
        dialogWidth: null,
        dialogHeight: null,
      });
    }
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
      </Section>
    );
  }
}
