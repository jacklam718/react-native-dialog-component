import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, StyleSheet, Text } from 'react-native';

import DialogExplorer from './DialogExplorer';
import AutoDialogSize from './containers/AutoDialogSize';
import FixedDialogSize from './containers/FixedDialogSize';

import SettingsDialog from './SettingsDialog';

export default class EXNavigator extends Component {
  constructor(props) {
    super(props);

    this.openSettingsDialog = this.openSettingsDialog.bind(this);
  }

  openSettingsDialog() {
    this.settingsDialog.openDialog();
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    // if (route.name === 'autoDialogSize') {
    //   return <AutoDialogSize navigator={navigator} />;
    // }
    // if (route.name === 'fixedDialogSize') {
    //   return <FixedDialogSize navigator={navigator} />;
    // }

    return <DialogExplorer navigator={navigator} />;
  }

  render() {
    const navigationBar = (
      <Navigator.NavigationBar
        style={styles.navigationBar}
        routeMapper={{
          LeftButton: (route, navigator, index) => {
            if (index === 0) {
              return null;
            }
            return (
              <TouchableOpacity
                style={[styles.navigationButton, styles.navigationLeftButton]}
                onPress={() => navigator.pop()}
              >
                <Text>
                  Back
                </Text>
              </TouchableOpacity>
            );
          },
          RightButton: (route, navigator, index) => {
            if (index === 0) {
              return (
                <TouchableOpacity
                  style={[styles.navigationButton, styles.navigationLeftButton]}
                  onPress={this.openSettingsDialog}
                >
                  <Text>
                    Settings
                  </Text>
                </TouchableOpacity>
              );
            }
            return null;
          },
          Title: (route) => (
            <Text style={styles.navigationTitle}>
              {route.title}
            </Text>
          ),
        }}
      />
    );

    return (
      <View style={{ flex: 1 }}>
        <Navigator
          initialRoute={{
            name: 'index',
            title: 'Dialog Explorer',
          }}
          navigationBar={navigationBar}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          style={styles.navigator}
        />
        <SettingsDialog
          ref={settingsDialog => this.settingsDialog = settingsDialog}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
