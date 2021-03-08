import { useEffect } from "react";
import { connect } from "react-redux";
import {
  ApplicationBox,
  LoadingWrapper,
  MarginWrapper,
} from "../../components";
import { TitleHeader } from "../../components/atom/TitleHeader";
import { ApplicationsState, fetchApplications, StoreState } from "../../redux";

export interface IProps {
  applications: ApplicationsState;
  fetchApplications: typeof fetchApplications;
}

export const Applications = ({ applications, fetchApplications }: IProps) => {
  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <LoadingWrapper isLoading={applications.isLoading}>
      <MarginWrapper>
        {applications.applications.map((application) => {
          return (
            <>
              <TitleHeader>{application.name}</TitleHeader>
              {application.applications &&
                application.applications.map((application) => (
                  <ApplicationBox
                    key={application.id}
                    application={application}
                  />
                ))}
            </>
          );
        })}
      </MarginWrapper>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  applications: state.applications,
});

const mapDispatchToProps = {
  fetchApplications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
