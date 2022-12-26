import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface AuthAtom {
  user: Record<string, any>;
  token?: string | undefined
}

export const authAtom = atomWithStorage("user", {
  user: {},
  token: undefined,
});
