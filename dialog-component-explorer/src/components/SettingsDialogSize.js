// @flow

import React, { Component } from 'react';
import { View, Text, Slider, Switch, Dimensions } from 'react-native';
import _ from 'lodash';
import Section from './Section';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type Props = {
  onSettingsUpdated: Function;
  autoDialogSize: boolean;
  dialogSizeWithPercentage: boolean;
  width: number;
  height: number;
}

export default class SettingsDialogSize extends Component {
  props: Props;

  static defaultProps = {
    onSettingsUpdated: () => null,
    autoDialogSize: true,
    dialogSizeWithPercentage: false,
    width: screenWidth,
    height: 300,
  }

  constructor(props) {
    super(props);

    this.state = {
      autoDialogSize: props.autoDialogSize,
      dialogSizeWithPercentage: props.dialogSizeWithPercentage,
      width: props.width,
      height: props.height,
    };

    this.autoDialogSizeSwitchChange = this.autoDialogSizeSwitchChange.bind(this);
    this.dialogSizeSwitchChange = this.dialogSizeSwitchChange.bind(this);
    this.widthChange = this.widthChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  componentDidUpdate() {
    this.props.onSettingsUpdated({ ...this.state });
  }

  autoDialogSizeSwitchChange(value) {
    this.setState({ autoDialogSize: value });
    if (value) {
      this.setState({
        width: null,
        height: null,
      });
    }
  }

  dialogSizeSwitchChange(value) {
    const isPercentage = value;
    let { width, height } = this.state;

    width = isPercentage ? (width / screenWidth) : (width * screenWidth);
    height = isPercentage ? (height / screenHeight) : (height * screenHeight);

    this.setState({
      dialogSizeWithPercentage: value,
      width,
      height,
    });
  }

  widthChange(value) {
    this.setState({ width: value });
  }

  heightChange(value) {
    this.setState({ height: value });
  }

  render() {
    let percentageSwitch;
    let widthSlider;
    let heightSlider;

    const isPercentage = this.state.dialogSizeWithPercentage;

    if (!this.state.autoDialogSize) {
      percentageSwitch = (
        <View>
          <Switch
            onValueChange={this.dialogSizeSwitchChange}
            value={this.state.dialogSizeWithPercentage}
          />
          <Text>
            Use Percentage: {`${this.state.dialogSizeWithPercentage}`}
          </Text>
        </View>
      );

      widthSlider = (
        <View>
          <Slider
            step={isPercentage ? 0.1 : 1}
            value={this.state.width}
            minimumValue={isPercentage ? 0.1 : 1}
            maximumValue={isPercentage ? 1.0 : screenWidth}
            onValueChange={this.widthChange}
          />
          <Text>
            Dialog Width: {this.state.width}
          </Text>
        </View>
      );
      heightSlider = (
        <View>
          <Slider
            step={isPercentage ? 0.1 : 1}
            value={this.state.height}
            minimumValue={isPercentage ? 0.1 : 1}
            maximumValue={isPercentage ? 1.0 : screenHeight}
            onValueChange={this.heightChange}
          />
          <Text>
            Dialog Height: {this.state.height}
          </Text>
        </View>
      );
    }

    return (
      <Section title="Dialog Size">
        <View>
          <Switch
            onValueChange={this.autoDialogSizeSwitchChange}
            value={this.state.autoDialogSize}
          />
          <Text>
            Auto Size: {`${this.state.autoDialogSize}`}
          </Text>

          {percentageSwitch}
          {widthSlider}
          {heightSlider}
        </View>
      </Section>
    );
  }
}
