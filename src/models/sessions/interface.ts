import { Users } from "..";

export interface ISessions {
  id: string;
  userAgent: string;
  userId: string;
  user?: Users;
}
