/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 16:51:47
 * @flow
 */
import React, { Component } from 'react';
import { Keyboard, Platform } from 'react-native';
import type { _t_navigation } from 'src/flow.types/navigation';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
  username: string,
  password: string,
  rememberChecked: boolean,
  keyboard: boolean,
};

export default class Logic extends Component<_t_props, _t_state> {
  state = {
    username: "",
    password: "",
    rememberChecked: false,
    keyboard: false,
  }

  keyboardShow: any ;

  keyboardHide: any;

  componentDidMount() {
    this.keyboardShow = Keyboard.addListener(
      Platform.select({
        ios: "keyboardWillShow",
        android: "keyboardDidShow",
      }), this.onKeyboardShow
    );
    this.keyboardHide = Keyboard.addListener(
      Platform.select({
        ios: "keyboardWillHide",
        android: "keyboardDidHide",
      }), this.onKeyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShow.remove();
    this.keyboardHide.remove();
  }

  onKeyboardShow = () => {
    this.setState({ keyboard: true });
  }

  onKeyboardHide = () => {
    this.setState({ keyboard: false });
  }

  onGotoHome = () => {
    const { navigation } = this.props;
    navigation.navigate("Homepage");
  }

  onGotoForgot = () => {
  }

  onGotoBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onSelectRemember = () => {
    this.setState(prevState => ({
      rememberChecked: !prevState.rememberChecked,
    }));
  }

  onGotoSignup = () => {
  }

  onPasswordChange = (password: string) => {
    this.setState({ password });
  }

  onUsernameChange = (username: string) => {
    this.setState({ username });
  }

  render() {
    const {
      username,
      password,
      rememberChecked,
      keyboard,
    } = this.state;

    return (
      <Layouts
        onGotoHome={this.onGotoHome}
        onGotoForgot={this.onGotoForgot}
        onSelectRemember={this.onSelectRemember}
        onGotoSignup={this.onGotoSignup}
        onGotoBack={this.onGotoBack}
        username={username}
        password={password}
        rememberChecked={rememberChecked}
        onPasswordChange={this.onPasswordChange}
        onUsernameChange={this.onUsernameChange}
        keyboard={keyboard}
      />
    );
  }
}
