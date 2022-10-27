import React, { useState } from 'react';
import { StyleSheet, Image } from "react-native";
import * as Yup from 'yup';

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from '../components/forms';

import authApi from '../api/auth';
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

function LoginScreen() {
  const { logIn } = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data);
  }

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}
      />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={'Invalid email and/or password'}
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'email'}
          keyboardType={'email-address'}
          name={'email'}
          placeholder={'Email'}
          textContenteType={'emailAddress'}
        />
        <AppFormField
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'lock'}
          name={'password'}
          placeholder={'Password'}
          secureTextEntry
          textContenteType={'password'}
        />

        <SubmitButton title={'Login'} />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})

export default LoginScreen;
