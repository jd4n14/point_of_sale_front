import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { templateAtom } from "./ui.state";

interface UIData {
  enableAside?: boolean;
  disableOnExit?: boolean;
  aside?: JSX.Element | undefined;
  currentPage?: boolean;
}

type UseUiTypeReturn = {
  toggleAside: () => void;
  setAside: (aside: JSX.Element) => void;
  withAside: boolean;
  aside?: JSX.Element | undefined;
};

type UseUiFunction = {
  (): UseUiTypeReturn;
  (props: UIData): UseUiTypeReturn;
};

export const useUi: UseUiFunction = (props?: UIData) => {
  const [uiData, setUiData] = useAtom(templateAtom);
  const resetUiData = useResetAtom(templateAtom);

  useEffect(() => {
    if (props?.enableAside) {
      setUiData((ui) => ({ 
        ...ui,
        withAside: true,
        aside: props?.aside
       }));
    }

    if (props?.currentPage) {
      resetUiData();
    }
    return () => {
      if(props?.disableOnExit) {
        setUiData((info) => ({ ...info, withAside: !info.withAside }))
      }
    }
  }, []);

  const toggleAside = () => {
    setUiData((ui) => ({ ...ui, withAside: !ui.withAside }));
  };

  const setAside = (aside: JSX.Element) => {
    setUiData((ui) => ({ ...ui, aside }));
  };

  return { ...uiData, toggleAside, setAside };
};
