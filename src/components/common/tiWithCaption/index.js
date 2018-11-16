/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-13 14:32:14
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 17:26:00
 * @flow
 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import FONTS from 'src/assets/styles/fonts';
import COLORS from 'src/assets/styles/colors';
import TextInput from '../textInput';
import Text from '../text';

type _t_props = {
  ref?: string,
  style?: _t_styles,
  tiStyle?: _t_styles,
  textStyle?: _t_styles,
  caption: string,
  onChangeText: (text: string) => void,
  tiValue: string,
  secureTextEntry?: boolean,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  textInput: {
    paddingTop: 0,
    fontSize: 14,
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.ebonyClay,
    paddingBottom: 10,
  },
  text: {
    fontSize: 13,
    fontFamily: FONTS.Poppins_Light,
    color: COLORS.slateGray,
    paddingBottom: 12,
  },
  tiUnderline: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.periwinkleGray,
  },
  tiActiveUnderline: {
    backgroundColor: COLORS.ebonyClay,
  }
});

const FCTextInput = (props: _t_props) => {
  const {
    ref,
    style,
    tiStyle,
    tiValue,
    textStyle,
    caption,
    onChangeText,
    secureTextEntry,
  } = props;
  return (
    <View style={[styles.container, style || {}]}>
      <Text
        style={[styles.text, textStyle || {}]}
      >
        {tiValue && caption}
      </Text>
      <TextInput
        onRef={(() => ref) || null}
        style={[styles.textInput, tiStyle || {}]}
        onChangeText={text => (onChangeText && onChangeText(text)) || (() => "")}
        value={tiValue || ""}
        secureTextEntry={secureTextEntry}
        placeholder={caption || ""}
        placeholderTextColor={COLORS.slateGray}
      />
      <View style={[styles.tiUnderline, tiValue ? styles.tiActiveUnderline : {}]} />
    </View>
  );
};

export default FCTextInput;
