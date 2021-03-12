import React from "react";
import { MarginWrapper } from "../../../components";
import { SideHeader } from "../../../components/atom/SideHeader";

const Users = () => {
  return (
    <MarginWrapper>
      <p>Candidacies</p>
      <SideHeader
        links={[
          {
            name: "Umsóknir",
            link: "/admins/users",
          },
          {
            name: "Stjórnendur",
            link: "/admins/users",
          },
        ]}
      >
        <p>Hello world!</p>
      </SideHeader>
    </MarginWrapper>
  );
};

export default Users;
