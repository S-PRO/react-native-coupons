/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-16 09:12:15
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 15:59:09
 * @flow
 */
import { createTabNavigator } from 'react-navigation';
import TabMenu from 'src/containers/main/tabMenu';
import Search from 'src/containers/search';
import Favorites from 'src/containers/favorites';
import Settings from 'src/containers/settings';

import DynamicTabBar from './homepageTabs.js';

const Routes = {
  Home: {
    screen: DynamicTabBar,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Search: {
    screen: Search,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: () => ({
      header: null,
    }),
  },
};

export const MainTabs = createTabNavigator(
  Routes, {
    tabBarComponent: TabMenu,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
  }
);
