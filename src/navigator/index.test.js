/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:34:47
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-12 13:34:47
 * @flow
 */
import { initialRouteName } from './index';

describe("check initialRouteName", () => {

  it("should be initial route ", () => {
    expect(initialRouteName).toEqual("Splash");
  });
});
