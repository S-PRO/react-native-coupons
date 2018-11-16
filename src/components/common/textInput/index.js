/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-13 13:36:35
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-13 15:43:58
 * @flow
 */
import * as React from 'react';
import { TextInput } from 'react-native';

type _t_props = {
  children?: React.Node,
};

const FCTextInput = (props: _t_props) => {
  const { children } = props;
  return (
    <TextInput
      allowFontScaling={false}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    >
      {children}
    </TextInput>
  );
};

export default FCTextInput;
