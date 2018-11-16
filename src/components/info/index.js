/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 16:04:56
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 16:49:50
 * @flow
 */
import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import Text from '../common/text';


type _t_props = {
  title: string,
  text: string,
  titleStyle?: _t_styles,
  textStyle?: _t_styles,
  style?: _t_styles,
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.Poppins_SemiBold,
    fontSize: 20,
    color: COLORS.ebonyClay,
    paddingBottom: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 12,
    color: COLORS.slateGray,
  },
});

const Info = (props: _t_props) => {
  const {
    title,
    text,
    textStyle,
    titleStyle,
    style,
  } = props;
  return (
    <View style={[styles.container, style && style]}>
      <Text
        style={[styles.title, titleStyle && titleStyle]}
      >
        {title}
      </Text>
      <Text
        style={[styles.text, textStyle && textStyle]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Info;
