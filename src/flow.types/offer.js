/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-12 13:26:45
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 12:45:33
 * @flow
 */
export type _t_e_group = {
  id: number,
  title: string,
  color: string | null,
};

export type _t_e_offer = {
  id: number,
  title: string,
  icon: number,
  text: string,
  rate: number,
  group: _t_e_group,
  date: number,
  location: string,
  phone: string,
  web: string,
  validity: number,
};

export type _t_e_full_offer = {
  id: number,
  title: string,
  icon: number,
  text: string,
  rate: number,
  group: _t_e_group,
  date: number,
  location: string,
  phone: string,
  web: string,
  validity: number,
  fullText: string,
  images: number[],
  relatedOffers: number[],
};
