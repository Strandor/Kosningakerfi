import { Formik } from "formik";
import { GenericButton, InputText, MarginWrapper } from "../../components";

const Admins = () => {
  return (
    <MarginWrapper>
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={{
          username: "",
          password: "",
        }}
        render={({ handleChange, handleSubmit }) => (
          <>
            <InputText
              id="username"
              text={"Notandanafn"}
              onChange={handleChange}
            />
            <InputText
              id="password"
              text={"Lykilorð"}
              onChange={handleChange}
            />
            <GenericButton onPress={handleSubmit}>Skrá inn</GenericButton>
          </>
        )}
      />
    </MarginWrapper>
  );
};

export default Admins;
