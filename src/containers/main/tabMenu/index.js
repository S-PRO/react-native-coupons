/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:05:10
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

  onGotoHome = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  }

  onGotoSearch= () => {
    const { navigation } = this.props;
    navigation.navigate("Search");
  }

  onGotoFavorites= () => {
    const { navigation } = this.props;
    navigation.navigate("Favorites");
  }

  onGotoSettings= () => {
    const { navigation } = this.props;
    navigation.navigate("Settings");
  }

  render() {
    return (
      <Layouts
        onGotoHome={this.onGotoHome}
        onGotoSearch={this.onGotoSearch}
        onGotoFavorites={this.onGotoFavorites}
        onGotoSettings={this.onGotoSettings}
      />
    );
  }
}
