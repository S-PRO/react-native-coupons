/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 16:57:23
 * @flow
 */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import { WIDTH, HEIGHT } from 'src/assets/styles/dimensions';
import IMAGES from 'src/config/image.constants';
import { TEXTS } from 'src/config/text.constants';
import Image from 'src/components/common/image';
import Button from 'src/components/common/button';
import Info from 'src/components/info';

type _t_props = {
  onPress: () => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
  },
  imageWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  info: {
    paddingBottom: 81,
  },
});

const Welcome = (props: _t_props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageBG}
            source={IMAGES.WELCOME_BG}
            resizeMode="contain"
          />
        </View>
        <Info
          title={TEXTS.WELCOME.SCREEN.INFO_TITLE}
          text={TEXTS.WELCOME.SCREEN.INFO_TEXT}
          style={styles.info}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title={TEXTS.WELCOME.SCREEN.BUTTON_TEXT}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;
