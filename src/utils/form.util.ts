import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

export { catchExeption, catchExeptionAsWarning } from "./exceptions/common.exception";
export const schemaResolver = standardSchemaResolver;
