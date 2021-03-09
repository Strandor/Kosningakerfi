import { FormEvent, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import {
  LoadingWrapper,
  MarginWrapper,
  DropdownItem,
  InputText,
  TextArea,
  GenericButton,
  InputFile,
} from "../../../components";
import {
  StoreState,
  selectApplication,
  ApplicationsState,
  createCandidacy,
  CandidacyState,
} from "../../../redux";
import { useRouter } from "next/router";
import _ from "lodash";
import { FieldArray, Formik, useFormik } from "formik";
import Error from "next/error";

export interface IProps {
  applications: ApplicationsState;
  selectApplication: typeof selectApplication;
  candidacy: CandidacyState;
  createCandidacy: typeof createCandidacy;
}

export const Application = ({
  applications,
  selectApplication,
  createCandidacy,
  candidacy,
}: IProps) => {
  const router = useRouter();
  const id = router.query.id;

  if (!id || typeof id !== "string") return <Error statusCode={404} />;

  useEffect(() => {
    if (typeof id == "string") selectApplication(id);
  }, []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
      createCandidacy({
        ...values,
        applicationId: id,
      });
    },
  });

  return (
    <LoadingWrapper isLoading={applications.isLoading}>
      <MarginWrapper>
        <form onSubmit={formik.handleSubmit}>
          <h2>{applications.selected?.name}</h2>
          <DropdownItem text={"Upplýsingar"}>
            <InputText
              id={"name"}
              text={"Nafn framboðs"}
              onChange={formik.handleChange}
            />
            <TextArea
              id={"description"}
              text={"Framboðstexti"}
              onChange={formik.handleChange}
            />
            <InputFile
              id="image"
              text={"mynd"}
              onChange={formik.handleChange}
            />
          </DropdownItem>
          <DropdownItem text={"Nemendur"}>
            <FieldArray
              name={"candidates"}
              validateOnChange={false}
              render={() =>
                _.times(applications.selected?.numApplicants, (index) => (
                  <InputText
                    id={`candidates.${index}.name`}
                    text={"Nafn"}
                    onChange={formik.handleChange}
                  />
                ))
              }
            />
          </DropdownItem>
          <GenericButton loading={candidacy.loading}>
            Senda inn umsókn
          </GenericButton>
        </form>
      </MarginWrapper>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  applications: state.applications,
  candidacy: state.candidacy,
});

const mapDispatchToProps = {
  selectApplication,
  createCandidacy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
