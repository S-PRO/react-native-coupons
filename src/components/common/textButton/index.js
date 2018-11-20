/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 14:52:13
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 12:46:50
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
    padding: 10,
  },
  text: {
    fontFamily: FONTS.Poppins_Medium,
    fontSize: 12,
    color: COLORS.ebonyClay,
  },
});

const TextButton = (props: _t_props) => {
  const {
    onPress,
    title,
    style,
    titleStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
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

export default TextButton;
