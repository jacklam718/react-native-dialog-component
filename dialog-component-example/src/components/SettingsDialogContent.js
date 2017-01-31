// @flow

import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import _ from 'lodash';
import Section from './Section';

type Props = {
  onSettingsUpdated: Function;
  dialogContentContainer: boolean;
}

export default class SettingsDialogContent extends Component {
  props: Props;

  static defaultProps = {
    onSettingsUpdated: () => null,
    dialogContentContainer: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      dialogContentContainer: props.dialogContentContainer,
    };

    this.dialogContentContainerSwitch = this.dialogContentContainerSwitch.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  componentDidUpdate() {
    this.props.onSettingsUpdated({ ...this.state });
  }

  dialogContentContainerSwitch(value) {
    this.setState({
      dialogContentContainer: value,
    });
  }

  render() {
    return (
      <Section title="Dialog Content">
        <View>
          <Switch
            onValueChange={this.dialogContentContainerSwitch}
            value={this.state.dialogContentContainer}
          />
          <Text>
            Use Content Container: {`${this.state.dialogContentContainer}`}
          </Text>
        </View>
      </Section>
    );
  }
}
