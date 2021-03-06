import { useEffect } from "react";
import { connect } from "react-redux";
import { Applications } from "..";
import { LoadingWrapper, MarginWrapper } from "../../../components";
import {
  StoreState,
  selectApplication,
  ApplicationsState,
} from "../../../redux";
import { useRouter } from "next/router";

export interface IProps {
  applications: ApplicationsState;
  selectApplication: typeof selectApplication;
}

export const Application = ({ applications, selectApplication }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    let id = router.query.id;
    if (typeof id == "string") selectApplication(id);
  }, []);

  return (
    <LoadingWrapper isLoading={applications.isLoading}>
      <MarginWrapper>
        <p></p>
      </MarginWrapper>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  applications: state.applications,
});

const mapDispatchToProps = {
  selectApplication,
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
