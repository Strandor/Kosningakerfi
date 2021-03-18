import { IAnnouncements } from "../../../models";

export interface AnnouncementsState {
  loading: boolean;
  announcements: IAnnouncements[];
}
