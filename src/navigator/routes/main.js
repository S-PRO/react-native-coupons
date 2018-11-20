/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:35:44
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 14:57:58
 * @flow
 */
import Splash from 'src/containers/main/splash';
import Welcome from 'src/containers/main/welcome';
import Onboarding from 'src/containers/main/onboarding';
import Login from 'src/containers/main/login';
import Offer from 'src/containers/main/offer';
import { MainTabs } from './mainTabs';

export default {
  Splash: {
    screen: Splash,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Onboarding: {
    screen: Onboarding,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Homepage: {
    screen: MainTabs,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Offer: {
    screen: Offer,
    navigationOptions: () => ({
      header: null,
    }),
  },
};
