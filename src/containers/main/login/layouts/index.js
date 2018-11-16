/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 09:58:25
 * @flow
 */
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import IMAGES from 'src/config/image.constants';
import { TEXTS } from 'src/config/text.constants';
import Image from 'src/components/common/image';
import Button from 'src/components/common/button';
import TextButton from 'src/components/common/textButton';
import IconButton from 'src/components/common/iconButton';
import Info from 'src/components/info';
import LoginInputs from 'src/components/loginInputs';

type _t_props = {
  onGotoHome: () => void,
  onGotoForgot: () => void,
  onSelectRemember: () => void,
  onGotoSignup: () => void,
  onGotoBack: () => void,
  onPasswordChange: (password: string) => void,
  username: string,
  password: string,
  rememberChecked: boolean,
  onUsernameChange: (username: string) => void,
  keyboard: boolean,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBG: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  info: {
    paddingBottom: 52,
  },
  login: {
    marginTop: 20,
  },
  loginInputs: {
    paddingBottom: 30,
  },
  backWhenBoard: {
    top: Platform.select({
      ios: 64,
      android: 20,
    }),
    bottom: null,
  },
  backButton: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 30,
    left: 30,
  },
});

const Login = (props: _t_props) => {
  const {
    onGotoHome,
    onGotoForgot,
    onSelectRemember,
    onGotoSignup,
    username,
    password,
    rememberChecked,
    onPasswordChange,
    onUsernameChange,
    keyboard,
    onGotoBack,
  } = props;
  const Wrapper = Platform.select({
    ios: KeyboardAvoidingView,
    android: View
  });

  return (
    <Wrapper
      style={styles.container}
      behavior="padding"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.imageWrapper}>
          {!keyboard && (
            <Image
              style={styles.imageBG}
              source={IMAGES.LOGIN_BG}
              resizeMode="contain"
            />
          )}
        </View>
        <Info
          title={TEXTS.LOGIN.SCREEN.INFO_TITLE}
          text={TEXTS.LOGIN.SCREEN.INFO_TEXT}
          style={styles.info}
        />
        <View style={styles.buttonWrapper}>
          <LoginInputs
            style={styles.loginInputs}
            forgotTitle={TEXTS.LOGIN.SCREEN.BUTTON_FORGOT_TEXT}
            onForgotPress={onGotoForgot}
            rememberTitle={TEXTS.LOGIN.SCREEN.BUTTON_REMEMBER_TEXT}
            onRememberPress={onSelectRemember}
            rememberChecked={rememberChecked}
            password={password}
            onPasswordChange={onPasswordChange}
            passworCaption={TEXTS.LOGIN.SCREEN.TE_PASSWORD_TITLE}
            username={username}
            onUsernameChange={onUsernameChange}
            usernameCaption={TEXTS.LOGIN.SCREEN.TE_USERNAME_TITLE}
          />
          <Button
            title={TEXTS.LOGIN.SCREEN.BUTTON_LOGIN_TEXT}
            onPress={onGotoHome}
          />
          <TextButton
            title={TEXTS.LOGIN.SCREEN.BUTTON_SIGNUP_TEXT}
            onPress={onGotoSignup}
            style={styles.login}
          />
        </View>
        <IconButton
          image={IMAGES.BACK_ARROW}
          onPress={onGotoBack}
          style={[styles.backButton, !keyboard && styles.backWhenBoard]}
        />
      </ScrollView>
    </Wrapper>
  );
};

export default Login;
