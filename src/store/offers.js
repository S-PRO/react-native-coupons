/*
 * @Author: Volynets Serhii
 * @Date: 2018-11-15 13:22:19
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-11-16 10:41:24
 * @flow
 */
import IMAGES from 'src/config/image.constants';
import COLORS from 'src/assets/styles/colors';
import type { _t_e_offer } from 'src/flow.types/offer';
// Mock for store data
const OFFERS = [
  {
    id: 1,
    title: "10-40% OFF",
    icon: IMAGES.LOGOS_MAC,
    text: "Flat Discounts on Every purchase!",
    rate: 4.5,
    group: {
      id: 1,
      title: "Food",
      color: COLORS.scienceBlue,
    },
    date: 1541023200,
    location: "New York, NY",
    phone: "+1 532-512-5125",
    web: "mcdonalds.com",
    validity: 1548972000,
  },
  {
    id: 2,
    title: "40-60% OFF",
    icon: IMAGES.LOGOS_HM,
    text: "For first time users",
    rate: 4.2,
    group: {
      id: 2,
      title: "Clothing",
      color: COLORS.mediumPurple,
    },
    date: 1541800800,
    location: "New York, NY",
    phone: "+1 543-654-4565",
    web: "hm.com",
    validity: 1543528800,
  },
  {
    id: 3,
    title: "40% Cashback",
    icon: IMAGES.LOGOS_BK,
    text: "For Repeat Orders",
    rate: 4.1,
    group: {
      id: 1,
      title: "Food",
      color: COLORS.scienceBlue,
    },
    date: 1541368800,
    location: "New York, NY",
    phone: "+1 756-456-3456",
    web: "bk.com",
    validity: 1543096800,
  },
  {
    id: 4,
    title: "TEST",
    icon: IMAGES.LOGOS_BK,
    text: "TEST",
    rate: 5,
    group: {
      id: 3,
      title: "Electronics",
      color: COLORS.manatee,
    },
    date: 1541368800,
    location: "New York, NY",
    phone: "+1 543-654-4565",
    web: "hm.com",
    validity: 1543096800,
  },
  {
    id: 5,
    title: "TEST2",
    icon: IMAGES.LOGOS_BK,
    text: "TEST2",
    rate: 2,
    group: {
      id: 3,
      title: "Electronics",
      color: COLORS.manatee,
    },
    date: 1541368800,
    location: "New York, NY",
    phone: "+1 543-654-4565",
    web: "hm.com",
    validity: 1543096800,
  },
];

export const getOffersByGroup = (id: number) => {
  const offers: _t_e_offer[] = [...OFFERS];
  if (id === 0) {
    return offers;
  }

  return offers.filter(el => el.group.id === id);
};
