import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	AdminWrapper,
	DropdownItem,
	GenericButton,
	InputPassword,
	InputText,
	ListIcon,
	LoadingWrapper,
	MarginWrapper,
	SideHeader,
	TitleHeader,
} from "../../../components";
import {
	createVotingKey,
	fetchUsers,
	StoreState,
	UsersState,
	fetchVotingKeys,
	VotingState,
} from "../../../redux";
import Error from "next/error";
import { Formik } from "formik";

interface IProps {
	users: UsersState;
	voting: VotingState;
	fetchVotingKeys: typeof fetchVotingKeys;
	createVotingKey: typeof createVotingKey;
}

const VotingKeys = ({
	users,
	voting,
	fetchVotingKeys,
	createVotingKey,
}: IProps) => {
	if (!users.isLoggedIn) return <Error statusCode={401} />;

	useEffect(() => {
		fetchVotingKeys();
	}, []);

	return (
		<AdminWrapper title="Kosningalyklar">
			<LoadingWrapper isLoading={voting.loading}>
				<DropdownItem text="Búa til nýjan lykil">
					<Formik
						initialValues={{
							isFramtidin: false,
						}}
						onSubmit={(values) => {
							createVotingKey(values);
						}}
					>
						{({ handleChange, handleSubmit }) => (
							<>
								<div
									style={{
										flexDirection: "row",
										display: "flex",
										alignItems: "center",
									}}
								>
									<input
										id="isFramtidin"
										type="checkbox"
										onChange={handleChange}
									/>
									<p>Framtíðarmeðlimur</p>
								</div>
								<GenericButton onPress={handleSubmit}>Búa til</GenericButton>
							</>
						)}
					</Formik>
				</DropdownItem>
				<DropdownItem text="Lyklar">
					{voting.votingKeys.map((votingKey) => (
						<ListIcon title={votingKey.id}>
							<TitleHeader>Framtíðin</TitleHeader>
							<p>{votingKey.isFramtidin ? "Já" : "Nei"}</p>
							<TitleHeader>Notaður</TitleHeader>
							<p>{votingKey.usedAt ? votingKey.usedAt : "Ónotaður"}</p>
							<TitleHeader>Búin til af</TitleHeader>
							<p>{votingKey.user && votingKey.user.username}</p>
						</ListIcon>
					))}
				</DropdownItem>
			</LoadingWrapper>
		</AdminWrapper>
	);
};

const mapStateToProps = (state: StoreState) => ({
	users: state.users,
	voting: state.voting,
});

const mapDispatchToProps = {
	fetchUsers,
	fetchVotingKeys,
	createVotingKey,
};

export default connect(mapStateToProps, mapDispatchToProps)(VotingKeys);
