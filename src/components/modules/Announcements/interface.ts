import {
  AnnouncementsState,
  closeAnnouncement,
  fetchAnnouncements,
} from "../../../redux";

export interface IProps {
  announcements: AnnouncementsState;
  closeAnnouncement: typeof closeAnnouncement;
  fetchAnnouncements: typeof fetchAnnouncements;
}
