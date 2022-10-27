import React from 'react';
import { StyleSheet } from "react-native";
import { useFormikContext } from 'formik';

import AppButton from "../../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton onPress={handleSubmit} title={title} />
  )
}

const styles = StyleSheet.create({
})

export default SubmitButton;
