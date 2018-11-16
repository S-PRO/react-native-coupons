/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:05:02
 * @flow
 */
import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import type { _t_e_group } from 'src/flow.types/offer';
import { GROUPS } from 'src/store/groups';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
  name: string,
  groups: _t_e_group[],
  selectedGroup: number,
};

export default class Logic extends Component<_t_props, _t_state> {
  state={
    name: "Galore",
    groups: GROUPS,
    selectedGroup: 0,
  }

  onGotoOffer = () => {
    const { navigation } = this.props;
    navigation.navigate("Offer");
  }

  onGroupSelect = (id: number) => {
    const { navigation } = this.props;
    navigation.navigate(`HomepageTab_${id.toString()}`, { id });
    this.setState({ selectedGroup: id });
  }

  render() {
    const {
      name,
      groups,
      selectedGroup,
    } = this.state;
    return (
      <Layouts
        onGotoOffer={this.onGotoOffer}
        name={name}
        groups={groups}
        selectedGroup={selectedGroup}
        onGroupSelect={this.onGroupSelect}
      />
    );
  }
}
