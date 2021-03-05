import { useEffect } from "react";
import { connect } from "react-redux";
import {
  ApplicationBox,
  LoadingWrapper,
  MarginWrapper,
} from "../../components";
import { TitleHeader } from "../../components/atom/TitleHeader";
import { fetchApplications } from "../../redux";
import { IProps } from "./interface";

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
              {application.applications.map((application) => {
                <ApplicationBox
                  key={application.id}
                  application={application}
                />;
              })}
            </>
          );
        })}
      </MarginWrapper>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

const mapDispatchToProps = {
  fetchApplications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
