import { Formik } from "formik";
import { GenericButton, InputText, MarginWrapper } from "../../components";
import styles from "./Voting.module.css";

const Voting = () => {
  return (
    <MarginWrapper>
      <div className={styles.header}>
        <h1 className={styles.title}>Kosning MR</h1>
        <p>Hello</p>
      </div>
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <InputText id="code" text="Kóði" onChange={handleChange} />
            <GenericButton onPress={handleSubmit}>Senda inn</GenericButton>
          </>
        )}
      </Formik>
    </MarginWrapper>
  );
};

export default Voting;
