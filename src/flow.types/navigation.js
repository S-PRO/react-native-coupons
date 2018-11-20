/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:25:21
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 16:14:02
 * @flow
 */
export type _t_navigation = {
  openDrawer: () => void,
  navigate: (route: string, params: ?(string | number | Object | Array<*> | boolean)) => void,
  push: (route: string, params: ?(string | number | Object | Array<*> | boolean)) => void,
  goBack: () => void,
  getParam: Function,
  pop: Function,
  setParams: Function,
  closeDrawer: Function,
  isFocused: Function,
  state: {
    routeName: string,
    key: string,
    params: { [string]: any }
  }
};
