import { useEffect } from "react";
import { connect } from "react-redux";
import { Applications } from "..";
import { LoadingWrapper, MarginWrapper } from "../../../components";
import { StoreState, selectApplication } from "../../../redux";
import { IProps } from "./interface";
import { useRouter } from "next/router";

export const Application = ({ applications, selectApplication }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    let id = router.query.id;
    if (Array.isArray(id)) {
      id = id[0];
    }

    selectApplication(id);
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
