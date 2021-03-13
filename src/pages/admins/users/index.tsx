import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  ApplicationBox,
  DropdownItem,
  GenericButton,
  InputText,
  LoadingWrapper,
  MarginWrapper,
} from "../../../components";
import { SideHeader } from "../../../components/atom/SideHeader";
import { fetchUsers, StoreState, UsersState } from "../../../redux";
import Error from "next/error";
import { Formik } from "formik";

interface IProps {
  users: UsersState;
  fetchUsers: typeof fetchUsers;
}

const Users = ({ users, fetchUsers }: IProps) => {
  //if (!users.isLoggedIn) return <Error statusCode={401} />;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MarginWrapper>
      <h1>Notendur</h1>
      <SideHeader
        links={[
          {
            name: "Umsóknir",
            link: "/admins/users",
          },
          {
            name: "Kosningalyklar",
            link: "/admins/votingkeys",
          },
          {
            name: "Stjórnendur",
            link: "/admins/users",
          },
        ]}
      >
        <LoadingWrapper isLoading={users.loading}>
          <DropdownItem text={"Búa til nýjan notanda"}>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleSubmit }) => (
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
                  <GenericButton onPress={handleSubmit}>Búa til</GenericButton>
                </>
              )}
            </Formik>
          </DropdownItem>
          <DropdownItem text={"Notendur"}>
            {users.users.map((user) => (
              <p>{user.username}</p>
            ))}
          </DropdownItem>
        </LoadingWrapper>
      </SideHeader>
    </MarginWrapper>
  );
};

const mapStateToProps = (state: StoreState) => ({
  users: state.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
