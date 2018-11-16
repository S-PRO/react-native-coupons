/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-14 16:27:13
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:04:09
 * @flow
 */
// import React from 'react';
// import {
//   ScrollView,
//   View,
//   StyleSheet,
// } from 'react-native';
import { createTabNavigator } from 'react-navigation';
// import COLORS from 'src/assets/styles/colors';
import HomepageTab from 'src/containers/main/homepageTab';
import Homepage from 'src/containers/main/homepage';
import { GROUPS } from 'src/store/groups';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   contentContainer: {
//     flexGrow: 1,
//   },
// });

const Routes = {};
GROUPS.forEach((element) => {
  const routeName = `HomepageTab_${element.id.toString()}`;
  const defValue = {
    screen: HomepageTab,
  };
  Routes[routeName] = defValue;
});

const TabsStack = createTabNavigator(
  Routes, {
    tabBarComponent: Homepage,
    tabBarPosition: "top",
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
  }
);
export default TabsStack;
// export const DynamicTabBar = (props) => {
//   const Routes = {};
//   GROUPS.forEach((element) => {
//     const routeName = `HomepageTab_${element.id.toString()}`;
//     const defValue = {
//       screen: HomepageTab,
//     };
//     Routes[routeName] = defValue;
//   });
//   const TabsStack = createTabNavigator(
//     Routes, {
//       tabBarComponent: Homepage,
//       tabBarPosition: "top",
//       animationEnabled: true,
//       swipeEnabled: false,
//       lazy: true,
//     }
//   );
//   console.log("DYNAMIC")
//   console.log(props)
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         keyboardShouldPersistTaps="never"
//         contentContainerStyle={styles.contentContainer}
//       >
//         <TabsStack navigator={ props.navigator } />
//       </ScrollView>
//     </View>
//   );
// };
