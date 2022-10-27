import React from 'react';
import { StyleSheet } from "react-native";
import AppText from "../../AppText";

import colors from '../../../config/color';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
  error: {
    fontSize: 13,
    color: colors.danger
  }
})

export default ErrorMessage;
