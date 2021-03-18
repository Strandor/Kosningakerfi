import { Formik } from "formik";
import React from "react";
import {
    DropdownItem,
    GenericButton,
    MarginWrapper,
    RadioButton,
    TitleHeader,
} from "../../../components";

const Voting = () => {
    return (
        <MarginWrapper>
            <Formik
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleSubmit }) => (
                    <>
                        <DropdownItem text="Forseti Framtíðarinnar">
                            <RadioButton text="Steinar Þór" />
                            <RadioButton text="Jón Jónsson" />
                        </DropdownItem>
                        <GenericButton onPress={handleSubmit}>
                            Senda inn
                        </GenericButton>
                    </>
                )}
            </Formik>
        </MarginWrapper>
    );
};

export default Voting;
