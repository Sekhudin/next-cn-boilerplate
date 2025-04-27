import React from "react";
import { usePathname } from "next/navigation";
import { isNotMatch, withDefault } from "src/utils/base";

export const useNextPathname = () => {
  const value = usePathname();
  const [list, last] = React.useMemo(() => {
    const listPath = withDefault(value, "")
      .split("/")
      .filter((value) => isNotMatch(value, ""));

    const lastPath = listPath[listPath.length - 1];
    return [listPath, lastPath];
  }, [value]);
  return { value, list, last };
};
