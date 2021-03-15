import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    AdminWrapper,
    DropdownItem,
    ListIcon,
    LoadingWrapper,
    TitleHeader,
} from "../../../components";
import {
    StoreState,
    fetchCandidacies,
    CandidacyState,
    UsersState,
} from "../../../redux";
import Error from "next/error";

interface IProps {
    users: UsersState;
    candidacy: CandidacyState;
    fetchCandidacies: typeof fetchCandidacies;
}

const Candidacy = ({ users, fetchCandidacies, candidacy }: IProps) => {
    if (!users.isLoggedIn) return <Error statusCode={401} />;

    useEffect(() => {
        fetchCandidacies();
    }, []);

    return (
        <AdminWrapper title="Framboð">
            <LoadingWrapper isLoading={candidacy.loading}>
                {candidacy.candidacies.map((application) => (
                    <DropdownItem text={application.name}>
                        {application.candidacies &&
                            application.candidacies.map((candidacy) => (
                                <ListIcon title={candidacy.name}>
                                    <TitleHeader>Framboðstexti</TitleHeader>
                                    <p>{candidacy.description}</p>
                                    {candidacy.image && (
                                        <>
                                            <TitleHeader>Mynd</TitleHeader>
                                            <img
                                                src={candidacy.image}
                                                style={{
                                                    maxHeight: "200px",
                                                    maxWidth: "100%",
                                                    borderRadius: "10px",
                                                }}
                                            />
                                        </>
                                    )}
                                    <TitleHeader>Nemendur</TitleHeader>
                                    <ul>
                                        {candidacy.candidats.map((candidat) => (
                                            <li>{candidat.name}</li>
                                        ))}
                                    </ul>
                                </ListIcon>
                            ))}
                    </DropdownItem>
                ))}
            </LoadingWrapper>
        </AdminWrapper>
    );
};

const mapStateToProps = (state: StoreState) => ({
    candidacy: state.candidacy,
    users: state.users,
});

const mapDispatchToProps = {
    fetchCandidacies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidacy);
