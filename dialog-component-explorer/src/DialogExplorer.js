import React, { Component, PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { DialogComponent } from 'react-native-dialog-component';

import Button from './components/Button';

export default class DialogExplorer extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.pageTitle}>
              {'React Native Dialog Component'}
            </Text>

            <Button
              style={styles.buttonStyle}
              text="Open Dialog"
              onPress={this.props.showDialog}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

DialogExplorer.propTypes = {
  navigator: PropTypes.object,
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: 100,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    marginBottom: 40,
  },
  buttonStyle: {
    marginBottom: 20,
  },
});
