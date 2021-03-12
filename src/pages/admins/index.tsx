import { Formik } from "formik";
import { connect } from "react-redux";
import { GenericButton, InputText, MarginWrapper } from "../../components";
import { authenticate, StoreState, UsersState } from "../../redux";

interface IProps {
  users: UsersState;
  authenticate: typeof authenticate;
}

const Admins = ({ users, authenticate }: IProps) => {
  return (
    <MarginWrapper>
      <p>Logged in {users.isLoggedIn ? "true" : "false"}</p>
      <Formik
        onSubmit={(values) => {
          authenticate(values);
        }}
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
            <GenericButton onPress={handleSubmit} loading={users.loading}>
              Skrá inn
            </GenericButton>
          </>
        )}
      />
    </MarginWrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  users: state.users,
});

const mapDispatchToProps = {
  authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admins);
