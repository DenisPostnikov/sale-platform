import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
  ErrorMessage
} from '../components/forms';
import Loader from '../components/Loader';

import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError('An unexpected error occurred.')
      }
      return null;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    auth.logIn(authToken);
  }

  return (
    <>
      <Loader visible={registerApi.isLoading || loginApi.isLoading} />

      <Screen style={styles.container}>
        <Form
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />

          <FormField
            autoCorrect={false}
            icon={'account'}
            name={'name'}
            placeholder={'Name'}
          />
          <FormField
            autoCapitalize={'none'}
            autoCorrect={false}
            icon={'email'}
            keyboardType={'email-address'}
            name={'email'}
            placeholder={'Email'}
            textContentType={'emailAddress'}
          />
          <FormField
            autoCapitalize={'none'}
            autoCorrect={false}
            icon={'lock'}
            keyboardType={'password'}
            name={'password'}
            placeholder={'Password'}
            secureTextEntry
            textContentType={'password'}
          />
          <SubmitButton title={'Register'} />
        </Form>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})

export default RegisterScreen;
