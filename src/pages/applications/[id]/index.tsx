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
import { FieldArray, Formik } from "formik";
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

  useEffect(() => {
    clearSuccess();
    selectApplication(id);
  }, []);

  if (!applications.selected && !applications.isLoading)
    return <NextError statusCode={404} />;

  return (
    <LoadingWrapper isLoading={applications.isLoading}>
      <MarginWrapper>
        {candidacy.success ? (
          <AlertBox />
        ) : (
          <Formik
            initialValues={{
              image: "",
            }}
            onSubmit={(values) => {
              if (values.image !== "") {
                //@ts-ignore
                let reader = new FileReader();

                reader.onload = () => {
                  createCandidacy({
                    ...values,
                    applicationId: id,
                    image: reader.result,
                  });
                };

                reader.readAsDataURL(values.image);
              } else {
                createCandidacy({
                  ...values,
                  applicationId: id,
                });
              }
            }}
            render={({ setFieldValue, handleChange, handleSubmit }) => (
              <>
                <h2>{applications.selected?.name}</h2>
                <DropdownItem text={"Upplýsingar um framboð"}>
                  {applications.selected?.maxNumApplicants != 1 && (
                    <InputText
                      id={"name"}
                      text={"Nafn framboðs"}
                      onChange={handleChange}
                    />
                  )}
                  <TextArea
                    id={"description"}
                    text={"Framboðstexti"}
                    onChange={handleChange}
                  />
                  <InputFile
                    id="image"
                    text={"mynd"}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                </DropdownItem>
                <DropdownItem
                  text={
                    applications.selected?.maxNumApplicants == 1
                      ? "Frambjóðandi"
                      : `Listi (${applications.selected?.minNumApplicants}-${applications.selected?.maxNumApplicants})`
                  }
                >
                  <FieldArray
                    name={"candidats"}
                    validateOnChange={false}
                    render={() =>
                      _.times(
                        applications.selected?.maxNumApplicants,
                        (index) => (
                          <InputText
                            id={`candidats.${index}.name`}
                            text={"Fullt nafn"}
                            onChange={handleChange}
                          />
                        )
                      )
                    }
                  />
                </DropdownItem>
                <GenericButton
                  loading={candidacy.loading}
                  onPress={handleSubmit}
                >
                  Senda inn framboð
                </GenericButton>
              </>
            )}
          />
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
