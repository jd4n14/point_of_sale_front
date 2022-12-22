import { atom } from "jotai";

export type UIAtomType = {
  navbar: boolean;
};
export const UIAtom = atom<UIAtomType>({ navbar: false });
