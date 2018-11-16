/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 13:48:56
 * @flow
 */
import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
};

export default class Logic extends Component<_t_props, _t_state> {

  onGotoWelcome = () => {
    const { navigation } = this.props;
    navigation.navigate("Welcome");
  }

  render() {
    return (
      <Layouts
        onPress={this.onGotoWelcome}
      />
    );
  }
}
