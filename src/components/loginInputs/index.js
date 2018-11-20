/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-13 11:40:03
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 15:26:42
 * @flow
 */
import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import FONTS from 'src/assets/styles/fonts';
import TextButton from '../common/textButton';
import CheckButton from '../common/checkButton';
import TIWithCaption from '../common/tiWithCaption';

type _t_props = {
  style?: _t_styles,
  forgotTitle?: string,
  onForgotPress?: () => void,
  rememberTitle?: string,
  onRememberPress?: () => void,
  rememberChecked?: boolean,
  onPasswordChange?: (password: string) => void,
  password: string,
  passworCaption?: string,
  usernameCaption?: string,
  onUsernameChange?: (username: string) => void,
  username: string,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  bottomButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotTitle: {
    fontFamily: FONTS.Poppins_Regular,
  },
  passwordTI: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

const LoginInputs = (props: _t_props) => {
  const {
    style,
    forgotTitle,
    onForgotPress,
    rememberTitle,
    onRememberPress,
    rememberChecked,
    onPasswordChange,
    password,
    passworCaption,
    usernameCaption,
    onUsernameChange,
    username,
  } = props;
  return (
    <View style={[styles.container, style || {}]}>
      <TIWithCaption
        caption={usernameCaption || ""}
        onChangeText={onUsernameChange || (() => {})}
        tiValue={username}
      />
      <TIWithCaption
        caption={passworCaption || ""}
        onChangeText={onPasswordChange || (() => {})}
        tiValue={password}
        secureTextEntry
      />
      <View style={styles.bottomButtons}>
        <CheckButton
          checked={rememberChecked}
          onPress={onRememberPress || (() => {})}
          title={rememberTitle || ""}
        />
        <TextButton
          onPress={onForgotPress || (() => {})}
          title={forgotTitle || ""}
          titleStyle={styles.forgotTitle}
        />
      </View>
    </View>
  );
};

export default LoginInputs;
