/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:49:58
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 08:47:38
 * @flow
 */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import type { _t_e_group } from 'src/flow.types/offer';
import COLORS from 'src/assets/styles/colors';
import FONTS from 'src/assets/styles/fonts';
import IMAGES from 'src/config/image.constants';
import SortFilters from 'src/components/sortFilters';
import Image from 'src/components/common/image';
import Text from 'src/components/common/text';
import Group from 'src/components/group';

type _t_props = {
  name: string,
  groups: _t_e_group[],
  selectedGroup: number,
  onGroupSelect: (id: number) => void,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  imageAvatar: {
  },
  imageBanner: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: FONTS.Poppins_SemiBold,
    color: COLORS.ebonyClay,
    fontSize: 20,
  },
  groupsTabs: {
  },
  selectedGroupIndicator: {
    opacity: 1,
    height: 3,
    marginTop: 7,
  },
  selectedGroupTitle: {
    color: COLORS.ebonyClay,
    opacity: 1,
    paddingHorizontal: 17,
  },
  selectedGroupFirst: {
    paddingHorizontal: 0,
    paddingRight: 10,
    backgroundColor: 'red',
  },
  selectedGroupLast: {
    paddingHorizontal: 0,
    paddingLeft: 10,
    backgroundColor: 'green',
  }
});

const Homepage = (props: _t_props) => {
  const {
    name,
    groups,
    selectedGroup,
    onGroupSelect,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerText}
        >
          {`Offers ${name}`}
        </Text>
        <Image
          style={styles.imageAvatar}
          source={IMAGES.HOMMEPAGE_AVATAR}
          resizeMode="contain"
        />
      </View>
      <Image
        style={styles.imageBanner}
        source={IMAGES.HOMMEPAGE_BANNER}
        resizeMode="contain"
      />
      <ScrollView
        style={styles.groupsTabs}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {groups.map((el, index, elems) => (
          <Group
            key={el.id.toString()}
            title={el.title}
            id={el.id}
            count={elems.length - 1}
            selected={selectedGroup === el.id}
            onPress={onGroupSelect}
            index={index}
          />))
        }
      </ScrollView>
      <SortFilters />
    </View>
  );
};

export default Homepage;
