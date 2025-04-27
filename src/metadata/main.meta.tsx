import { initMetadata } from "src/utils/metadata";
import * as env from "src/configs/env.config";

export const metadata = initMetadata({
  title: `${env.app.name} | Rising star`,
  description: `${env.app.name} is new application that provide good development standard.`,
});