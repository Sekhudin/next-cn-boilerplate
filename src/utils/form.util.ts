import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { catchExeption, catchExeptionAsWarning } from "./exceptions/common.exception";

export const schemaResolver = standardSchemaResolver;
export { catchExeption, catchExeptionAsWarning };

export const createOnSubmit = <T>(onSubmit: (formValues: T) => Promise<void>) => {
  return async (values: T) => {
    try {
      await onSubmit(values);
    } catch (error) {
      catchExeption(error);
    }
  };
};
