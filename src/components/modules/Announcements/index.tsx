import { connect } from "react-redux";
import {
  StoreState,
  closeAnnouncement,
  fetchAnnouncements,
} from "../../../redux";
import { IProps } from "./interface";
import styles from "./Announcements.module.css";
import { useEffect } from "react";

const Component = ({
  announcements,
  fetchAnnouncements,
  closeAnnouncement,
}: IProps) => {
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (announcements.announcements.length == 0) return <></>;

  return (
    <div className={styles.outer}>
      <p>{announcements.announcements[0].text}</p>
      <img src={"/images/close.svg"} onClick={closeAnnouncement} />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  announcements: state.announcements,
});

const mapDispatchToProps = {
  closeAnnouncement,
  fetchAnnouncements,
};

export const Announcements = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
