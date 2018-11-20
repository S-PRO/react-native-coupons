/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-16 13:36:52
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 14:48:33
 * @flow
 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_e_offer } from 'src/flow.types/offer';
import Offer from 'src/components/offer';
import { TEXTS } from 'src/config/text.constants';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import Text from 'src/components/common/text';

type _t_props = {
  offers: _t_e_offer[],
  onGotoRelatedOffer: (id: number) => void,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 13,
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.manatee,
    marginBottom: 20,
  },
});

const RelatedOffers = (props: _t_props) => {
  const {
    offers,
    onGotoRelatedOffer,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TEXTS.OFFER.SCREEN.RELATED}</Text>
      {offers.map(el => (
        <Offer
          key={el.id.toString()}
          offer={el}
          onGotoOffer={onGotoRelatedOffer}
        />
      ))}
    </View>
  );
};

export default RelatedOffers;
