import React from "react";
import { catchException } from "src/utils/exception";

type AsyncMethod = () => Promise<void>;
export const useAsync = (asyncMethod: AsyncMethod) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const handler = React.useCallback(async () => {
    try {
      setLoading(true);
      await asyncMethod();
    } catch (error) {
      catchException(error);
    } finally {
      setLoading(false);
    }
  }, [asyncMethod]);

  return { handler, loading };
};
