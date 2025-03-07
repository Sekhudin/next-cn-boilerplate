import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { catchException, catchExeptionAsWarning } from "./exceptions/common.exception";

export const schemaResolver = standardSchemaResolver;
export { catchException, catchExeptionAsWarning };

export const createOnSubmit = <T>(onSubmit: (formValues: T) => Promise<void>) => {
  return async (values: T) => {
    try {
      await onSubmit(values);
    } catch (error) {
      catchException(error);
    }
  };
};
