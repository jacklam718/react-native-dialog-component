import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

function DialogContent({ children, contentStyle }) {
  return (
    <View style={[styles.container, contentStyle]}>
      {children}
    </View>
  );
}

export default DialogContent;
