/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-15 14:36:27
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 12:02:41
 * @flow
 */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import type { _t_e_offer } from 'src/flow.types/offer';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import IMAGES from 'src/config/image.constants';
import Text from 'src/components/common/text';
import Image from 'src/components/common/image';

type _t_props = {
  offer: _t_e_offer,
  onGotoOffer: (id: number) => void,
};

type _t_info_props = {
  text: string,
  color: string | null,
  icon?: number,
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.porcelain,
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 99,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 30,
  },
  infoBox: {
    flex: 1,
    marginRight: 30,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.ebonyClay,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 12,
    fontFamily: FONTS.Poppins_Light,
    color: COLORS.manatee,
  },
  infoButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoButtonBG: {
    borderRadius: 10,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 10,
  },
  infoButtonText: {
    paddingVertical: 2,
    opacity: 1,
    backgroundColor: "transparent",
    fontSize: 11,
    fontFamily: FONTS.Poppins_Medium,
  },
  infoButtonIcon: {
    marginRight: 5,
  },
});

export const InfoButton = (props: _t_info_props) => {
  const {
    text,
    color,
    icon,
  } = props;

  return (
    <View style={[styles.infoButtonBG, color ? { backgroundColor: `${color}1a` } : {}]}>
      {icon && (
        <Image
          source={icon}
          style={styles.infoButtonIcon}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.infoButtonText, icon ? { color: COLORS.ebonyClay } : { color }]}>
        {text}
      </Text>
    </View>
  );
};

const Offer = (props: _t_props) => {
  const {
    offer,
    onGotoOffer,
  } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onGotoOffer(offer.id)}
    >
      <Image
        source={offer.icon}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.infoBox}>
        <Text style={styles.title} numberOfLines={1}>
          {offer.title}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {offer.text}
        </Text>
        <View style={styles.infoButtons}>
          <InfoButton
            text={offer.rate.toString()}
            color={COLORS.supernova}
            icon={IMAGES.HOMMEPAGE_STAR}
          />
          <InfoButton
            text={offer.group.title}
            color={offer.group.color}
          />
          <InfoButton
            text={`${moment().diff(moment(offer.date * 1000), 'days')} Days`}
            color={COLORS.cardinal}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Offer;
