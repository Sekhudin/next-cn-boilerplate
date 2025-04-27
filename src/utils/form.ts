import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import {
  catchException,
  catchExceptionAsWarning,
  catchHookException,
  catchHookExceptionAsWarning,
} from "./exception";

export const schemaResolver = standardSchemaResolver;
export const createOnSubmit = <T>(onSubmit: (formValues: T) => Promise<void>) => {
  return async (values: T) => {
    try {
      await onSubmit(values);
    } catch (error) {
      catchException(error);
    }
  };
};

export const afterSubmited = <T>(callback?: (value: T) => void, params?: T) => {
  if (callback && params) {
    callback(params);
  }
};

export { catchException, catchExceptionAsWarning, catchHookException, catchHookExceptionAsWarning };
