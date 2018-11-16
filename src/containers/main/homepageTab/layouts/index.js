/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:08:48
 * @flow
 */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import type { _t_e_offer } from 'src/flow.types/offer';
import COLORS from 'src/assets/styles/colors';
import Offer from 'src/components/offer';

type _t_props = {
  onGotoOffer: (id: number) => void,
  offers: _t_e_offer[],
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    height: 0,
    paddingHorizontal: 20,
  },
});

const HomepageTab = (props: _t_props) => {
  const {
    onGotoOffer,
    offers,
  } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        style={styles.scroll}
      >
        {offers.map(el => (
          <Offer
            key={el.id.toString()}
            offer={el}
            onGotoOffer={onGotoOffer}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomepageTab;
