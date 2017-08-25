// @flow

import React, { Component, PropTypes } from 'react';
import { View, Text, Slider, Switch, Dimensions, Picker, StyleSheet } from 'react-native';
import { FadeAnimation, ScaleAnimation, SlideAnimation } from 'react-native-dialog-component';
import * as m from 'react-native-dialog-component';
import _ from 'lodash';
import Section from './Section';

const { width, height } = Dimensions.get('window');

type Props = {
  onSettingsUpdated: Function;
  dialogAnimation: Object;
  selectedDialogAnimation: string;
};

export default class SettingsDialogAnimation extends Component {
  props: Props;

  static defaultProps = {
    onSettingsUpdated: () => null,
  }

  constructor(props) {
    super(props);

    this.state = {
      dialogAnimation: props.dialogAnimation,
      selectedDialogAnimation: props.selectedDialogAnimation,
    };

    this.dialogAnimationPickerChange = this.dialogAnimationPickerChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (!_.isEqual(this.state, nextState));
  }

  componentDidUpdate() {
    this.props.onSettingsUpdated({ ...this.state });
  }

  dialogAnimationPickerChange(value) {
    let dialogAnimation;

    switch (value) {
      case 'default':
        dialogAnimation = new FadeAnimation({ animationDuration: 150 });
        break;
      case 'scale':
        dialogAnimation = new ScaleAnimation();
        break;
      case 'slide':
        dialogAnimation = new SlideAnimation({ slideFrom: 'top' });
        break;
      default:
        dialogAnimation = new FadeAnimation({ animationDuration: 150 });
        break;
    }

    this.setState({
      dialogAnimation,
      selectedDialogAnimation: value,
    });
  }

  render() {
    return (
      <Section title="Dialog Animation">
        <View>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedDialogAnimation}
            onValueChange={this.dialogAnimationPickerChange}
          >
            <Picker.Item label="fade animation" value="fade" />
            <Picker.Item label="scale animation" value="scale" />
            <Picker.Item label="slide animation" value="slide" />
          </Picker>
          <Text>
            Dialog Animation: {`${this.state.selectedDialogAnimation}`}
          </Text>
        </View>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    // width: 100,
  },
});
