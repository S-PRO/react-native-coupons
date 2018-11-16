/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-13 12:01:47
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 13:17:57
 * @flow
 */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import type { _t_styles } from 'src/flow.types/reactElements';
import Text from '../text';

type _t_props = {
  onPress?: () => void,
  style?: any,
  checked?: boolean,
  checkerStyle?: _t_styles,
  checkedStyle?: _t_styles,
  title?: string;
  titleStyle?: _t_styles,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: 'row',
  },
  checker: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: COLORS.heather,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.heather,
  },
  title: {
    color: COLORS.slateGray,
    marginLeft: 10,
    fontSize: 12,
    fontFamily: FONTS.Poppins_Regular,
  }
});

const CheckButton = (props: _t_props) => {
  const {
    onPress,
    style,
    checked,
    checkerStyle,
    checkedStyle,
    title,
    titleStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style || {}]}
      onPress={() => onPress && onPress()}
    >
      <View style={[styles.checker, checkerStyle || {}]}>
        {checked && <View style={[styles.checked, checkedStyle || {}]} />}
      </View>
      {title && (
        <Text
          style={[styles.title, titleStyle || {}]}
        >
          {title || ""}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CheckButton;
