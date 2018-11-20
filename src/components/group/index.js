/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-14 12:29:03
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-15 17:49:37
 * @flow
 */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
// import type { _t_styles } from 'src/flow.types/reactElements';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import Text from 'src/components/common/text';

type _t_props = {
  onPress: (id: number) => void,
  title: string,
  id: number,
  style?: any,
  count: number,
  index: number,
  selected: boolean,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.slateGray,
    fontSize: 13,
    opacity: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  selectedTitle: {
    opacity: 1,
    color: COLORS.ebonyClay,
    fontSize: 14,
  },
  indicator: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.ebonyClay,
    opacity: 0.1,
    marginTop: 8,
  },
  selectedIndicator: {
    height: 3,
    opacity: 1,
    marginTop: 7,
  },
  selectedWrapper: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  first: {
    paddingLeft: 0,
  },
  firstMargin: {
    marginLeft: 20,
  },
  last: {
    paddingRight: 0,
  },
  lastMargin: {
    marginRight: 20,
  },
});

const Group = (props: _t_props) => {
  const {
    onPress,
    id,
    title,
    style,
    index,
    count,
    selected,
  } = props;
  const first = index === 0;
  const last = index === count;
  return (
    <TouchableOpacity
      style={[
        styles.container, style || {},
        first ? styles.firstMargin : {},
        last ? styles.lastMargin : {},
      ]}
      onPress={() => onPress(id)}
    >
      <View
        style={[
          selected ? styles.selectedWrapper : {},
        ]}
      >
        <Text
          style={[
            styles.title, selected ? styles.selectedTitle : {},
            first && selected ? styles.first : {},
            last && selected ? styles.last : {}
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={[styles.indicator, selected ? styles.selectedIndicator : {}]} />
    </TouchableOpacity>
  );
};

export default Group;
