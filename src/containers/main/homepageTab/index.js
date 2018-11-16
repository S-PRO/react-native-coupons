/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:09:59
 * @flow
 */
import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import type { _t_e_offer } from 'src/flow.types/offer';
import { getOffersByGroup } from 'src/store/offers';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
  offers: _t_e_offer[],
};

export default class Logic extends Component<_t_props, _t_state> {
  constructor(props: _t_props) {
    super(props);
    this.state = {
      offers: props.navigation.state.params ? getOffersByGroup(props.navigation.state.params.id) : [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    if (navigation.state.params) {
      const idGroup = navigation.state.params.id;
      this.setState({ offers: getOffersByGroup(idGroup) });
    } else {
      this.setState({ offers: getOffersByGroup(0) });
    }
  }

  shouldComponentUpdate(nextProps: _t_props) {
    const { navigation } = this.props;
    if (navigation.state.params && nextProps.navigation.state.params.id === navigation.state.params.id) {
      return false;
    }
    return true;
  }

  onGotoOffer = (id: number) => {
    const { navigation } = this.props;
    navigation.navigate("Offer", { id });
  }

  render() {
    const {
      offers,
    } = this.state;
    return (
      <Layouts
        onGotoOffer={this.onGotoOffer}
        offers={offers}
      />
    );
  }
}
