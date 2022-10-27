import React from 'react';
import { useFormikContext } from "formik";

import AppTextInput from "../../AppTextInput";
import ErrorMessage from "../ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    values
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField;
