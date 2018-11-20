/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-15 17:46:02
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-15 17:47:14
 * @flow
 */
/** @format */

import { AppRegistry } from 'react-native';
import App from 'src/setup';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
