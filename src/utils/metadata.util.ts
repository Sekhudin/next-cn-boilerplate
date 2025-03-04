import type { InitMetadata, GenerateMetadata } from "src/types/global.type";

export const initMetadata: InitMetadata = (metadata) => {
  return { ...metadata };
};

export const generateMetadata: GenerateMetadata = (callback) => {
  return (props, parent) => callback(props, parent);
};
