import React from "react";
import { catchException } from "src/utils/exceptions/common.exception";

type AsyncMethod = () => Promise<void>;
function useAsync(asyncMethod: AsyncMethod) {
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
}

export default useAsync;
