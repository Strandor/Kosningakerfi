import { FieldArray, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
	DropdownItem,
	GenericButton,
	InputText,
	LoadingWrapper,
	MarginWrapper,
	RadioButton,
	VotingCandidacies,
} from "../../components";
import { AlertBox } from "../../components/atom/AlertBox";
import { StoreState, fetchVoting, VotingState, submitVotes } from "../../redux";

interface IProps {
	fetchVoting: typeof fetchVoting;
	voting: VotingState;
	submitVotes: typeof submitVotes;
}

const Voting = ({ voting, fetchVoting, submitVotes }: IProps) => {
	const router = useRouter();

	useEffect(() => {
		const votingKey = router.query.votingKey;

		if (votingKey && !Array.isArray(votingKey)) {
			fetchVoting({
				votingKey: votingKey,
			});
		}
	}, [router.query.votingKey]);

	return (
		<MarginWrapper>
			{voting.success ? (
				<AlertBox
					title="🙌 Þetta tókst! 🙌"
					message="Við höfum skráð atkvæðið. Takk fyrir að kjósa!"
				/>
			) : (
				<LoadingWrapper isLoading={voting.loading}>
					{voting.voting?.votingKey ? (
						<>
							{voting.voting?.applications.map((application) => (
								<VotingCandidacies application={application} />
							))}
							<GenericButton onPress={submitVotes} loading={voting.loading}>
								Senda inn
							</GenericButton>
						</>
					) : (
						<Formik
							initialValues={{
								votingKey: "",
							}}
							onSubmit={(values) => {
								fetchVoting(values);
							}}
						>
							{({ handleChange, handleSubmit }) => (
								<>
									<InputText
										id="votingKey"
										text="Kóði"
										onChange={handleChange}
									/>
									<GenericButton onPress={handleSubmit}>
										Senda inn
									</GenericButton>
								</>
							)}
						</Formik>
					)}
				</LoadingWrapper>
			)}
		</MarginWrapper>
	);
};

const mapStateToProps = (state: StoreState) => ({
	voting: state.voting,
});

const mapDispatchToProps = {
	fetchVoting,
	submitVotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Voting);
