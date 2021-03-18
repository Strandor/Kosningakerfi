import { MarginWrapper, SideHeader } from "../../";
import { IProps } from "./interface";

export const AdminWrapper = ({ children, title }: IProps) => {
  return (
    <MarginWrapper>
      <h1>{title}</h1>
      <SideHeader
        links={[
          {
            name: "Framboð",
            link: "/admins/candidacy",
          },
          {
            name: "Kosningalyklar",
            link: "/admins/voting-keys",
          },
          {
            name: "Stjórnendur",
            link: "/admins/users",
          },
        ]}
      >
        {children}
      </SideHeader>
    </MarginWrapper>
  );
};
