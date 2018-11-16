/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:40:39
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:12:56
 * @flow
 */
import React, { Component } from 'react';
import type { _t_navigation } from 'src/flow.types/navigation';
import type { _t_e_full_offer } from 'src/flow.types/offer';
import { getOfferById } from 'src/store/offer';
import Layouts from './layouts';

type _t_props = {
  navigation: _t_navigation,
};

type _t_state = {
  offer: _t_e_full_offer,
};

export default class Logic extends Component<_t_props, _t_state> {
  constructor(props: _t_props) {
    super(props);
    this.state = {
      offer: getOfferById(props.navigation.state.params.id),
    };
  }

  onGotoRelatedOffer = (id: number) => {
    const { navigation } = this.props;
    navigation.push("Offer", { id });
  }

  onSelectFavorites = () => {

  }

  onGotoBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onGotoClaim = () => {

  }

  render() {
    const {
      offer
    } = this.state;
    return (
      <Layouts
        onGotoRelatedOffer={this.onGotoRelatedOffer}
        onSelectFavorites={this.onSelectFavorites}
        onGotoBack={this.onGotoBack}
        onGotoClaim={this.onGotoClaim}
        offer={offer}
      />
    );
  }
}
