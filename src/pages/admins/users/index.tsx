import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  GenericButton,
  InputText,
  ListIcon,
  LoadingWrapper,
  MarginWrapper,
  SideHeader,
} from "../../../components";
import {
  createUser,
  fetchUsers,
  StoreState,
  UsersState,
  deleteUser,
} from "../../../redux";
import Error from "next/error";
import { Formik } from "formik";

interface IProps {
  users: UsersState;
  fetchUsers: typeof fetchUsers;
  createUser: typeof createUser;
  deleteUser: typeof deleteUser;
}

const Users = ({ users, fetchUsers, createUser, deleteUser }: IProps) => {
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
            name: "Embætti",
            link: "/admins/users",
          },
          {
            name: "Kosningalyklar",
            link: "/admins/users",
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
              onSubmit={(values) => {
                createUser(values);
              }}
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
              <ListIcon
                title={user.username}
                icon={"/images/delete.svg"}
                onIconPress={() => deleteUser(user.id)}
              />
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
  createUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
