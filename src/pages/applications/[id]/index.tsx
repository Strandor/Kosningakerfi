import { FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  LoadingWrapper,
  MarginWrapper,
  DropdownItem,
  InputText,
  TextArea,
  GenericButton,
} from "../../../components";
import {
  StoreState,
  selectApplication,
  ApplicationsState,
} from "../../../redux";
import { useRouter } from "next/router";
import _ from "lodash";
import { Formik, useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
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
          </DropdownItem>
          <GenericButton>Senda inn umsókn</GenericButton>
        </form>
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
