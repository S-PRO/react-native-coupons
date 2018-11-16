/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 10:09:51
 * @flow
 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import IMAGES from 'src/config/image.constants';
import IconButton from 'src/components/common/iconButton';

type _t_props = {
  onGotoHome: () => void,
  onGotoSearch: () => void,
  onGotoFavorites: () => void,
  onGotoSettings: () => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 58,
    width: "100%",
    shadowColor: COLORS.midnight,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    padding: 10,
  },
});

const Welcome = (props: _t_props) => {
  const {
    onGotoHome,
    onGotoSearch,
    onGotoFavorites,
    onGotoSettings,
  } = props;
  return (
    <View style={styles.container}>
      <View />
      <IconButton
        onPress={onGotoHome}
        image={IMAGES.TABS_HOME}
        style={styles.icon}
      />
      <IconButton
        onPress={onGotoFavorites}
        image={IMAGES.TABS_FAVORITES}
        style={styles.icon}
      />
      <IconButton
        onPress={onGotoSearch}
        image={IMAGES.TABS_SEARCH}
        style={styles.icon}
      />
      <IconButton
        onPress={onGotoSettings}
        image={IMAGES.TABS_SETTINGS}
        style={styles.icon}
      />
      <View />
    </View>
  );
};

export default Welcome;
