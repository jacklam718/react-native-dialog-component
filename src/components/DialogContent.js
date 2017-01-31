import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DialogContent({ children, contentStyle }) {
  return (
    <View style={[styles.container, contentStyle]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default DialogContent;
