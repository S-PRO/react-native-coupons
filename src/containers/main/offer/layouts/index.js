/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 14:46:48
 * @flow
 */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';
import type { _t_e_full_offer } from 'src/flow.types/offer';
import { WIDTH } from 'src/assets/styles/dimensions';
import IMAGES from 'src/config/image.constants';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import { TEXTS } from 'src/config/text.constants';
import IconButton from 'src/components/common/iconButton';
import { InfoButton } from 'src/components/offer';
import Image from 'src/components/common/image';
import Text from 'src/components/common/text';
import Button from 'src/components/common/button';
import { getOfferById } from 'src/store/offer';
import Details from './details.js';
import RelatedOffers from './relatedOffers.js';

type _t_props = {
  onGotoRelatedOffer: (id: number) => void,
  onGotoBack: () => void,
  onSelectFavorites: () => void,
  onGotoClaim: () => void,
  offer: _t_e_full_offer,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  },
  scroll: {
    height: 0,
  },
  header: {
    paddingTop: 44 + 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
  },
  headerButton: {
    padding: 10,
  },
  shortInfoContainer: {
    height: 118,
    flexDirection: "row",
  },
  logo: {
    marginHorizontal: 20,
  },
  infoBox: {
    flex: 1,
    marginRight: 55,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.Poppins_SemiBold,
    color: COLORS.ebonyClay,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.manatee,
  },
  infoButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  caruselImage: {
    flex: 1,
    alignItems: "center",
  },
  carusel: {
    marginVertical: 30,
  },
  claimButton: {
    paddingHorizontal: 20,
  }
});

const Offer = (props: _t_props) => {
  const {
    onGotoRelatedOffer,
    onSelectFavorites,
    onGotoBack,
    onGotoClaim,
    offer,
  } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
        style={styles.scroll}
      >
        <View style={styles.header}>
          <IconButton
            style={styles.headerButton}
            image={IMAGES.BACK_ARROW}
            onPress={onGotoBack}
          />
          <IconButton
            style={styles.headerButton}
            image={IMAGES.OFFER_FAVORITES}
            onPress={onSelectFavorites}
          />
        </View>
        <View style={styles.shortInfoContainer}>
          <Image
            source={offer.icon}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.infoBox}>
            <Text style={styles.title} numberOfLines={1}>
              {offer.title}
            </Text>
            <Text style={styles.text} numberOfLines={3}>
              {offer.fullText}
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
                text={`${moment().diff(moment(offer.date * 1000), 'days')} Days Left`}
                color={COLORS.cardinal}
              />
            </View>
          </View>
        </View>
        <Carousel
          data={offer.images}
          renderItem={({ item }) => (
            <View style={styles.caruselImage}>
              <Image
                source={item}
                resizeMode="contain"
              />
            </View>
          )}
          sliderWidth={WIDTH}
          itemWidth={WIDTH - 45}
          slideStyle={styles.carusel}
        />
        <Details
          location={offer.location}
          phone={offer.phone}
          web={offer.web}
          validity={offer.validity}
        />
        <View style={styles.claimButton}>
          <Button
            title={TEXTS.OFFER.SCREEN.BUTTON_CLAIM}
            onPress={onGotoClaim}
          />
        </View>
        {offer.relatedOffers.length > 0 && (
          <RelatedOffers
            onGotoRelatedOffer={onGotoRelatedOffer}
            offers={offer.relatedOffers.map(el => getOfferById(el))}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Offer;
