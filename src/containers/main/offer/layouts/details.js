/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-16 13:36:52
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 14:19:43
 * @flow
 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { TEXTS } from 'src/config/text.constants';
import IMAGES from 'src/config/image.constants';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import Image from 'src/components/common/image';
import Text from 'src/components/common/text';

type _t_props = {
  location: string,
  phone: string,
  web: string,
  validity: number,
};

type _t_info_props = {
  title: string,
  value: string,
  icon?: number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 192,
    borderWidth: 1,
    borderColor: COLORS.porcelain,
    borderRadius: 10,
    margin: 20,
    marginTop: 0,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.ebonyClay,
  },
  infoField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoValueBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 13,
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.slateGray,
  },
  infoValue: {
    fontSize: 13,
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.ebonyClay,
  },
  infoIcon: {
    marginLeft: 10,
  },
});

const InfoField = (props: _t_info_props) => {
  const {
    title,
    value,
    icon,
  } = props;
  return (
    <View style={styles.infoField}>
      <Text style={styles.infoTitle}>{title}</Text>
      <View style={styles.infoValueBox}>
        <Text style={styles.infoValue}>{value}</Text>
        {icon && (
          <Image
            source={icon}
            resizeMode="contain"
            style={styles.infoIcon}
          />
        )}
      </View>
    </View>
  );
};

const Details = (props: _t_props) => {
  const {
    location,
    phone,
    web,
    validity,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TEXTS.OFFER.SCREEN.DETAILS}</Text>
      <InfoField
        title={TEXTS.OFFER.SCREEN.LOCATION}
        value={location}
        icon={IMAGES.OFFER_ICON_LOCATION}
      />
      <InfoField
        title={TEXTS.OFFER.SCREEN.PHONE}
        value={phone}
        icon={IMAGES.OFFER_ICON_PHONE}
      />
      <InfoField
        title={TEXTS.OFFER.SCREEN.WEB}
        value={web}
        icon={IMAGES.OFFER_ICON_WEB}
      />
      <InfoField
        title={TEXTS.OFFER.SCREEN.VALIDITY}
        value={`${moment(validity * 1000).diff(moment(), 'days')} Days`}
      />
    </View>
  );
};

export default Details;
