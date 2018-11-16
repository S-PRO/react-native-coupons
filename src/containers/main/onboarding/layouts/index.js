/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 11:21:03
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
import ImageButton from 'src/components/common/imageButton';
import TextButton from 'src/components/common/textButton';
import Info from 'src/components/info';

type _t_props = {
  onGotoLogin: () => void,
  onGotoFacebook: () => void,
  onGotoGoogle: () => void,
  onGotoSignup: () => void,
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
    alignItems: "center",
  },
  info: {
    paddingBottom: 72,
  },
  login: {
    marginTop: 20,
  },
  imagesButtonWrapper: {
    flexDirection: "row",
    height: 44,
    marginBottom: 30,
  },
  separator: {
    width: 25,
  },
});

const Onboarding = (props: _t_props) => {
  const {
    onGotoLogin,
    onGotoFacebook,
    onGotoGoogle,
    onGotoSignup,
  } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageBG}
            source={IMAGES.ONBOARDING_BG}
            resizeMode="contain"
          />
        </View>
        <Info
          title={TEXTS.ONBOARDING.SCREEN.INFO_TITLE}
          text={TEXTS.ONBOARDING.SCREEN.INFO_TEXT}
          style={styles.info}
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.imagesButtonWrapper}>
            <ImageButton
              image={IMAGES.ONBOARDING_FACEBOOK}
              onPress={onGotoFacebook}
            />
            <View style={styles.separator} />
            <ImageButton
              image={IMAGES.ONBOARDING_GOOGLE}
              onPress={onGotoGoogle}
            />
          </View>
          <Button
            title={TEXTS.ONBOARDING.SCREEN.BUTTON_SIGNUP_TEXT}
            onPress={onGotoSignup}
          />
          <TextButton
            title={TEXTS.ONBOARDING.SCREEN.BUTTON_LOGIN_TEXT}
            onPress={onGotoLogin}
            style={styles.login}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Onboarding;
