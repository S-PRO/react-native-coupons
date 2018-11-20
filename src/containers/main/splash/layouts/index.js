/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 14:25:32
 * @flow
 */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import { WIDTH, HEIGHT } from 'src/assets/styles/dimensions';
import IMAGES from 'src/config/image.constants';
import Image from 'src/components/common/image';

type _t_props = {
  onPress: () => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
  },
  imageBG: {
    flex: 1,
  },
  box: {
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  }
});

const Splash = (props: _t_props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          style={styles.imageBG}
          source={IMAGES.SPLASH_BG}
          resizeMode="contain"
        />
        <View style={styles.box}>
          <TouchableOpacity
            onPress={onPress}
          >
            <Image
              source={IMAGES.SPLASH_LOGO}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default Splash;
