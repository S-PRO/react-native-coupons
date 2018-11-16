/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 14:52:13
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 18:07:13
 * @flow
 */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import type { _t_styles } from 'src/flow.types/reactElements';
import Text from '../text';

type _t_props = {
  onPress: ?Function,
  title: string,
  style?: any,
  titleStyle?: _t_styles,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.slateGray,
    height: 44,
    width: "100%",
    backgroundColor: COLORS.scienceBlue,
    shadowColor: COLORS.mineShaft,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
  },
  text: {
    fontFamily: FONTS.Poppins_SemiBold,
    fontSize: 13,
    color: COLORS.white,
  },
});

const Button = (props: _t_props) => {
  const {
    onPress,
    title,
    style,
    titleStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style || {}]}
      onPress={() => onPress && onPress()}
    >
      <Text
        style={[styles.text, titleStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
