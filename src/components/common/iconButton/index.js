/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-13 16:18:42
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 09:57:06
 * @flow
 */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { _t_styles } from 'src/flow.types/reactElements';
import Image from '../image';

type _t_props = {
  onPress: () => void,
  style?: any,
  image: number,
  imageStyle?: _t_styles,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const ImageButton = (props: _t_props) => {
  const {
    onPress,
    image,
    style,
    imageStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style || {}]}
      onPress={() => onPress && onPress()}
    >
      <Image
        style={imageStyle && imageStyle}
        source={image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ImageButton;
