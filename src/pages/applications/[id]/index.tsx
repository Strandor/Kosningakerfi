import {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
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
  clearSuccess,
} from "../../../redux";
import { useRouter } from "next/router";
import _ from "lodash";
import { FieldArray, Formik, useFormik } from "formik";
import NextError from "next/error";
import { AlertBox } from "../../../components/atom/AlertBox";

export interface IProps {
  applications: ApplicationsState;
  selectApplication: typeof selectApplication;
  candidacy: CandidacyState;
  createCandidacy: typeof createCandidacy;
  clearSuccess: typeof clearSuccess;
}

export const Application = ({
  applications,
  selectApplication,
  createCandidacy,
  clearSuccess,
  candidacy,
}: IProps) => {
  const router = useRouter();
  const id = router.query.id;

  if (!id || typeof id !== "string") return <NextError statusCode={404} />;

  useLayoutEffect(() => {
    clearSuccess();
    selectApplication(id);
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

  if (!applications.selected && !applications.isLoading)
    return <NextError statusCode={404} />;

  return (
    <LoadingWrapper isLoading={applications.isLoading}>
      <MarginWrapper>
        {candidacy.success ? (
          <AlertBox />
        ) : (
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
                name={"candidats"}
                validateOnChange={false}
                render={() =>
                  _.times(applications.selected?.numApplicants, (index) => (
                    <InputText
                      id={`candidats.${index}.name`}
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
        )}
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
  clearSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
