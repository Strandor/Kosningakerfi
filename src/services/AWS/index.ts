import { S3, config } from "aws-sdk";
import {
  AWS_ACCESS_KEY,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from "../../utils.ts";

config.update({
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
});

export const s3 = new S3();
