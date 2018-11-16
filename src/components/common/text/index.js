/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 15:09:35
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 16:06:01
 * @flow
 */
import * as React from 'react';
import { Text } from 'react-native';

type _t_props = {
  children?: React.Node,
};

const FCText = (props: _t_props) => {
  const { children } = props;
  return (
    <Text
      allowFontScaling={false}
      {...props}
    >
      {children}
    </Text>
  );
};

export default FCText;
