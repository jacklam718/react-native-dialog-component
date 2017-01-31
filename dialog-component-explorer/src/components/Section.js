import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Section({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>
        {title}
      </Text>
      <View style={styles.seperator} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: 20,
  },
  title: {
    paddingBottom: 10,
    fontSize: 14,
    alignSelf: 'center',
  },
  seperator: {
    height: 0.5,
    marginBottom: 10,
    backgroundColor: '#a6a6a6',
  },
});
