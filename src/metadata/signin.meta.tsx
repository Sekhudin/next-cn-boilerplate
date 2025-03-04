import { initMetadata } from "src/utils/metadata.util";
import * as env from "src/configs/env.config";

export const metadata = initMetadata({
  title: `${env.client.APP_NAME} | Signin`,
  description: `${env.client.APP_NAME} is new application that provide good development standard.`,
});