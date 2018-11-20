/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-15 15:17:57
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 08:49:34
 * @flow
 */

import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FONTS from 'src/assets/styles/fonts';
import COLORS from 'src/assets/styles/colors';
import { TEXTS } from 'src/config/text.constants';
import IMAGES from 'src/config/image.constants';
import Image from 'src/components/common/image';
import Text from '../common/text';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 10,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    padding: 10,
    fontSize: 13,
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.manatee,
  },
  filterBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const SortFilters = () => (
  <View style={[styles.container]}>
    <TouchableOpacity>
      <Text
        style={[styles.text]}
      >
        {TEXTS.HOMEPAGE.SCREEN.BUTTON_RECOMMENDED}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterBox}>
      <Text
        style={[styles.text]}
      >
        {TEXTS.HOMEPAGE.SCREEN.BUTTON_FILTERS}
      </Text>
      <Image
        source={IMAGES.HOMMEPAGE_FILTER}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);

export default SortFilters;
