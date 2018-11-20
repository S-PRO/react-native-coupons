/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:33:20
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:15:26
 * @flow
 */
import React from 'react';
import { Keyboard } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import ROUTES from './routes';

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export const initialRouteName = "Splash";

export default class Navigator extends React.Component<*, *> {
  initRouter = () => createStackNavigator(
    ROUTES, {
      initialRouteName,
      cardStyle: {
        shadowColor: "transparent",
      },
      navigationOptions: {
        gesturesEnabled: false,
      },
    }
  );

  render() {
    const RootNavigator = this.initRouter();
    return (
      <RootNavigator
        ref={(ref) => {
          if (ref) {
            NavigationActions.navigate(ref);
          }
        }}
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);
          if (!!currentScreen && prevScreen !== currentScreen) {
            Keyboard.dismiss();
          }
        }}
      />
    );
  }
}
