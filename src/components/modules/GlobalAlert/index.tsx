import { IProps } from "./interface";
import styles from "./GlobalAlert.module.css";
import { connect } from "react-redux";
import { StoreState, closeAlert } from "../../../redux";

const Component = ({ app, closeAlert }: IProps) => {
  if (!app.globalAlert) return <></>;

  return (
    <div className={styles.outer}>
      <p className={styles.text}>{app.globalAlert}</p>
      <p onClick={closeAlert}>x</p>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  app: state.app,
});

const mapDispatchToProps = {
  closeAlert,
};

export const GlobalAlert = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
