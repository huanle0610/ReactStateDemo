import { atom } from 'jotai';

const appleCountAtom = atom(0);
const applePriceAtom = atom(1.0);
const basketPriceAtom = atom(0);
const totalPriceAtom = atom(
  (get) => get(appleCountAtom) * get(applePriceAtom) + get(basketPriceAtom)
);

export default {
  appleCountAtom,
  applePriceAtom,
  basketPriceAtom,
  totalPriceAtom,
};
