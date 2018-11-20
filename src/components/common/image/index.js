/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 14:01:05
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 16:05:36
 * @flow
 */
import * as React from 'react';
import { Image } from 'react-native';

type _t_props = {
  children?: React.Node,
};

const FCImage = (props: _t_props) => {
  const { children } = props;
  return (
    <Image
      {...props}
    >
      {children}
    </Image>
  );
};

export default FCImage;
