import { S3, config } from "aws-sdk";

config.update({
  secretAccessKey: "",
  accessKeyId: "",
  region: "",
});

export const s3 = new S3();
