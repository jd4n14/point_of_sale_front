import { WritableAtom } from "jotai";
import { atomWithReset } from "jotai/utils";

interface TemplateAtom {
  withAside: boolean;
  aside?: JSX.Element;
}
export const templateAtom = atomWithReset<TemplateAtom>({
  withAside: false,
  aside: undefined,
});
